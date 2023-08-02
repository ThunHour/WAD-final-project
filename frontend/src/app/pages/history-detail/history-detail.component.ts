import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CustomizedService } from 'src/app/services/customized.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent {
  isLoading: boolean = false;
  item: any
  id: string
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _customizeService: CustomizedService
  ) { }
  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params['id'];
      this.isLoading = true;
      (await this._customizeService.getCustomizeByid(this.id))
        .subscribe((data: any) => {
          this.item = data.data;
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
  goToEditCustomize(id: string) {
    this._router.navigate(['/customize/', id]);
  }
  async deleteCustom(id: string) {
    (await this._customizeService.deleteCustomized(id)).subscribe(
      (data: any) => {
        console.log(data);
        window.location.href = '/history'
      }
    )
  }
}
