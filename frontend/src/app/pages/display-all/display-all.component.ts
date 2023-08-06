import { Component, Input } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';
import { CpuService } from 'src/app/services/cpu.service';
import { GpuService } from 'src/app/services/gpu.service';
import { MotherboardService } from 'src/app/services/motherboard.service';
import { PowersupplyService } from 'src/app/services/powersupply.service';
import { RamService } from 'src/app/services/ram.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.scss'],
})
export class DisplayAllComponent {
  constructor(
    private _motherBoardService: MotherboardService,
    private _caseService: CaseService,
    private _gpuService: GpuService,
    private _powersupplyService: PowersupplyService,
    private _storageService: StorageService,
    private _ramService: RamService,
    private _cpuService: CpuService,
    private router: Router
  ) { }

  listMotherBoard: any[] = [];
  listCase: any[] = [];
  listGpu: any[] = [];
  listPowerSupply: any[] = [];
  listStorage: any[] = [];
  listRam: any[] = [];
  listCpu: any[] = [];
  isLoading: boolean = false;

  async ngOnInit() {
    this.isLoading = true;
    (await this._motherBoardService.getAllMotherBoards()).subscribe(
      (data: any) => {
        this.listMotherBoard = data.data;
      }
    );
    (await this._caseService.getAllCases()).subscribe((data: any) => {
      this.listCase = data.data;
    });

    (await this._gpuService.getAllGpus()).subscribe((data: any) => {
      this.listGpu = data.data;
      console.log(this.listGpu[0].gpu[0]);
    });
    (await this._powersupplyService.getAllPowerSupplies()).subscribe(
      (data: any) => {
        this.listPowerSupply = data.data;
      }
    );
    (await this._storageService.getAllStorages()).subscribe((data: any) => {
      this.listStorage = data.data;
    });
    (await this._ramService.getAllRams()).subscribe((data: any) => {
      this.listRam = data.data;
    });
    (await this._cpuService.getAllCpus()).subscribe((data: any) => {
      this.listCpu = data.data;
      console.log(this.listCpu[0].gpu[0]);
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },

  };
  goDetail(id: string, type: string) {
    this.router.navigate(['/component', id, type]);
  }

}
