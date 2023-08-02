import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {

  constructor(private partner: PartnerService) { }
  listPartner: any[] = [];
  async ngOnInit() {
    (await this.partner.getAllPartner()).subscribe(
      (data: any) => {
        this.listPartner = data.data
      }
    );
  }
  customOptions:OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,

    responsive: {
      0: {
        items: 1
      },
      100: {
        items: 2
      },
      200: {
        items: 3
      },
      300: {
        items: 4
      }
    }

  }

}
