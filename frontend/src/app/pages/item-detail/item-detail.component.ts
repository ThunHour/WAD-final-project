import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { CaseService } from 'src/app/services/case.service';
import { CpuService } from 'src/app/services/cpu.service';
import { CustomizedService } from 'src/app/services/customized.service';
import { GpuService } from 'src/app/services/gpu.service';
import { MotherboardService } from 'src/app/services/motherboard.service';
import { PowersupplyService } from 'src/app/services/powersupply.service';
import { RamService } from 'src/app/services/ram.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  id: string = ""
  type: string = ""
  item: any
  listRelatedItem: any[] = []
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    items: 5

  }
  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    private customizedService: CustomizedService,
    private router: Router,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private ramService: RamService,
    private poweerSupplyService: PowersupplyService,
    private storageService: StorageService,
    private mothderBoardService: MotherboardService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  async ngOnInit() {


    this.route.params.subscribe(async params => {
      this.id = params['id'];
      this.type = params['type'] as string;
      switch (this.type) {
        case 'case':
          {
            (await this.caseService.getCaseById(this.id)).subscribe((data: any) => {
              this.item = data.data
              console.log(data);
            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'powerSupply':
          {
            (await this.poweerSupplyService.getPowerSupplyById(this.id)).subscribe((data: any) => {
              this.item = data.data
              console.log(data.data.powerSupply[0]);


            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'gpu':
          {
            (await this.gpuService.getGpuById(this.id)).subscribe((data: any) => {
              this.item = data.data

            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'ram':
          {
            (await this.ramService.getRamById(this.id)).subscribe((data: any) => {
              this.item = data.data

            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'cpu':
          {

            (await this.cpuService.getCpuById(this.id)).subscribe((data: any) => {
              this.item = data.data

            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'motherBoard':
          {
            (await this.mothderBoardService.getMotherBoardById(this.id)).subscribe((data: any) => {
              this.item = data.data

            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
        case 'storage':
          {
            (await this.storageService.getStorageById(this.id)).subscribe((data: any) => {
              this.item = data.data

            })
            await (await this.customizedService.getRandom(this.id, this.type)).subscribe((data: any) => {
              this.listRelatedItem = data.data
            });
            break;
          }
      }

    });
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, this.type]);
  }
}
