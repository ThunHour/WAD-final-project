import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomizedService } from 'src/app/services/customized.service';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.scss']
})
export class CommunityDetailComponent {
  isLoading: boolean = false;
  item: any
  id: string
  constructor(
    private route: ActivatedRoute
    ,
    private _customizeService: CustomizedService
  ) { }
  async ngOnInit() {


    this.route.params.subscribe(async params => {
      this.id = params['id'];
      this.isLoading = true;
      (await this._customizeService.getCustomizeByid(this.id)).subscribe((data: any) => {
        this.item = data.data
        this.isLoading = false;
      });
    })
  }
  checkUserName(username: string) {
    if (username == localStorage.getItem('name')) {
      return "You";
    } else {
      return username
    }
  }
  getTotal(data: any) {
    return this._customizeService.getTotalPrice(data);
  }
}
