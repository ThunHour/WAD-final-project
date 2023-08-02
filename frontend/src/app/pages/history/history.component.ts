import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomizedService } from 'src/app/services/customized.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private _customizedService: CustomizedService, private toastr: ToastrService, private router: Router) { }
  listCustomized: any[] = [];
  isLoading: boolean = false;
  total: number = 0;

  async ngOnInit() {
    this.isLoading = true;
    (await this._customizedService.getHistoryCustomized()).subscribe(
      (data: any) => {
        this.listCustomized = data.data;
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
      }
    );
  }
  checkUserName(username: string) {
    if (username == localStorage.getItem('name')) {
      return "You";
    } else {
      return username
    }
  }
  async share(event: Event, id: string) {
    this.isLoading = true;
    event.stopPropagation();
    (await this._customizedService.shareCustomized(id)).pipe(
      catchError((error: any) => {
        if (error.status == 500) {
          this.toastr.error(error.error.message, 'Error',
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
          setTimeout(() => {
            this.isLoading = false;
          }, 100);
        }
        if (error.status == 409) {
          this.toastr.warning(error.error.message, 'Warning',
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
          setTimeout(() => {
            this.isLoading = false;
          }, 100);
        }
        return error
      })
    ).subscribe(
      () => {

        this.toastr.success('Share customized  success', 'Done',
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
        setTimeout(() => {
          this.isLoading = false;
        }, 100);

      }
    )
  }
  getTotal(data: any) {
    return this._customizedService.getTotalPrice(data);
  }
  goToCustomizeDetail(id: string) {
    this.router.navigate(['/history/detail/', id]);
  }


}
