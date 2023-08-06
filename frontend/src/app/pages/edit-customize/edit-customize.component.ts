import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Stepper from 'bs-stepper';
import { CreateService } from 'src/app/services/create.service';
import { GpuService } from 'src/app/services/gpu.service';
import { MotherboardService } from 'src/app/services/motherboard.service';
import { PowersupplyService } from 'src/app/services/powersupply.service';
import { CustomizedService } from 'src/app/services/customized.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customize',
  templateUrl: './edit-customize.component.html',
  styleUrls: ['./edit-customize.component.scss']
})
export class EditCustomizeComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private _router: Router,
    private _motherBoardService: MotherboardService,
    private _createService: CreateService,
    private _powersupplyService: PowersupplyService,
    private _gpuService: GpuService,
    private _customizeService: CustomizedService,
    private _toastr: ToastrService,
  ) { }
  customizeId: string
  listMotherBoard: any[] = [];
  listPowerSupply: any[] = [];
  listGpu: any[] = [];
  selectedMotherBoard: any;
  selectedPowerSupply: any;
  selectedGpu: any;
  selectedCase: any;
  selectedStorage: any;
  selectedRam: any;
  selectedCpu: any;
  relatedCase: any[] = [];
  relatedCpu: any[] = [];
  relatedStorage: any[] = [];
  relatedRam: any[] = [];
  selectedPowerSupplyId: string = '';
  selectedGpuId: string = '';
  selectedCaseId: string = '';
  selectedStorageId: string = '';
  selectedRamId: string = '';
  selectedCpuId: string = '';
  isLoading: boolean = false;
  displayModal: boolean;
  default = {
    id: '',
    price: "0.0",
    model: "N/A",
    spec: "N/A",
    type: "N/A",
    color: {
      color: "N/A",
      image: [
        {
          id: '',
          imageUrl: "https://www.usa.canon.com/content/dam/canon/default-img/image-unavailable.png"
        }
      ]
    }
  }
  showModalDialog() {
    this.displayModal = true;
  }

  async ngOnInit() {
    (await this._powersupplyService.getAllPowerSupplies()).subscribe(
      (data: any) => {
        this.listPowerSupply = data.data;
      }
    ),
      (await this._motherBoardService.getAllMotherBoards()).subscribe(
        (data: any) => {
          this.listMotherBoard = data.data;
        }
      ),
      (await this._gpuService.getAllGpus()).subscribe((data: any) => {
        this.listGpu = data.data;
      }),
      (this.stepper = new Stepper(document.querySelector('#stepper1')!, {
        linear: false,
        animation: true,
      })),
      (this.activateRoute.params.subscribe(async (param) => {
        this.customizeId = param['id'];
        (await this._customizeService.getCustomizeByid(param['id'])).subscribe(async (data: any) => {
          this.selectedMotherBoard = data.data.motherBoard;
          this.selectedCase = data.data.case;
          this.selectedStorage = data.data.storage;
          this.selectedRam = data.data.ram;
          this.selectedCpu = data.data.cpu;
          this.selectedPowerSupply = data.data.powerSupply;
          this.selectedGpu = data.data.gpu;
          this.selectedMotherBoardId = data.data.motherBoard.id;
          this.selectedPowerSupplyId = data.data.powerSupply.id;
          this.selectedGpuId = data.data.gpu.id;
          this.selectedCaseId = data.data.case.id;
          this.selectedStorageId = data.data.storage.id;
          this.selectedRamId = data.data.ram.id;
          this.selectedCpuId = data.data.cpu.id;
          (await this._createService.getMotherBoardById(data.data.motherBoard.panelMotherBoardId)).subscribe(
            (data: any) => {
              if (data == null) {
                return;
              } else {
                this.relatedCase = data.data.panelcase;
                this.relatedCpu = data.data.panelcpu;
                this.relatedStorage = data.data.panelstorage;
                this.relatedRam = data.data.panelRam;
              }
            }
          )
        });
      }));


  }

  name = 'Angular';
  private stepper!: Stepper;
  selectedMotherBoardId: string = '';



  async onSelectedMotherboard(id: string) {
    (await this._createService.getMotherBoardById(id)).subscribe(
      (data: any) => {
        if (data == null) {
          return;
        } else {
          this.selectedMotherBoard = data.data.motherBoard[0];
          this.relatedCase = data.data.panelcase;
          this.relatedCpu = data.data.panelcpu;
          this.relatedStorage = data.data.panelstorage;
          this.relatedRam = data.data.panelRam;
          this.selectedMotherBoardId = data.data.motherBoard[0].id;
        }

      }
    );
  }
  selectedItem(base: string, selected: string) {
    if (base == selected) {
      return true;
    }
    return false;
  }


  onSelectedPowerSupply(id: string) {
    this.selectedPowerSupplyId = id;
    this.selectedPowerSupply = this.listPowerSupply.find((x) => x.powerSupply[0].id === id).powerSupply[0];

  }
  onSelectedGpu(id: string) {
    this.selectedGpu = this.listGpu.find((x) => x.gpu[0].id === id).gpu[0];
    this.selectedGpuId = id;
  }
  onSelectedCase(id: string) {
    this.selectedCase = this.relatedCase.find((x) => x.case[0].id === id).case[0];
    this.selectedCaseId = id;
  }
  onSelectedStorage(id: string) {
    this.selectedStorageId = id;
    this.selectedStorage = this.relatedStorage.find((x) => x.storage[0].id === id).storage[0];
  }
  onSelectedRam(id: string) {
    this.selectedRamId = id;
    this.selectedRam = this.relatedRam.find((x) => x.ram[0].id === id).ram[0];

  }
  onSelectedCpu(id: string) {
    this.selectedCpuId = id;
    this.selectedCpu = this.relatedCpu.find((x) => x.cpu[0].id === id).cpu[0];

  }



  async submitPc() {
    this.isLoading = true;
    const customizedObj: any = {
      caseId: this.selectedCaseId,
      cpuId: this.selectedCpuId,
      gpuId: this.selectedGpuId,
      motherBoardId: this.selectedMotherBoardId,
      powerSupplyId: this.selectedPowerSupplyId,
      ramId: this.selectedRamId,
      storageId: this.selectedStorageId,
    };

    (
      await this._customizeService.editCustomized(
        JSON.stringify(customizedObj)
        , this.customizeId
      )
    ).pipe(
      catchError((error: any) => {
        if (error.status == 500) {
          this._toastr.error(error.error.message, 'Error',
            {
              timeOut: 1500,
              closeButton: true,
              enableHtml: true,
              progressBar: true,
              progressAnimation: 'decreasing',
              positionClass: 'toast-' + 'top' + '-' + 'right',
              titleClass: "text-light",
              messageClass: "text-light",
            });
          this.isLoading = false;
        }
        return error;
      })
    )
      .subscribe(() => {
        this._toastr.success('Edit customized  success', 'Done',
          {
            timeOut: 1500,
            closeButton: true,
            enableHtml: true,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-' + 'top' + '-' + 'right',
            titleClass: "text-light",
            messageClass: "text-light",
          })
        this.isLoading = false;
        this.onBackHome()
      });
  }

  onNext() {
    this.stepper.next();
    return false;
  }

  onBackHome() {
    this._router.navigate(['/history']);
  }
  goToDetail(id: string, type: string) {
    this._router.navigate(['/component', id, type]);
  }
}
