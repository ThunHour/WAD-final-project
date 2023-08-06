import { Component } from '@angular/core';
import { CustomizedService } from '../../services/customized.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators/catchError';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  constructor(private _customizedService: CustomizedService, private toastr: ToastrService, private router: Router) { }
  listCustomized: any[] = [];
  isLoading: boolean = false;

  async ngOnInit() {
    this.isLoading = true;
    (await this._customizedService.getAllCustomized()).subscribe(
      (data: any) => {
        this.listCustomized = data.data;
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      }
    );
  }
  async saveCustomized(event: Event, id: any) {
    this.isLoading = true;
    event.stopPropagation();
    ((await this._customizedService.saveCustomizedFromCommunity(id)).pipe(
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
        return error
      })
    )).subscribe(
      () => {
        this.toastr.success('Save customized  success', 'Done',
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

    );

  }
  checkUserName(username: string) {
    if (username == localStorage.getItem('name')) {
      return "You";
    } else {
      return username
    }
  }
  goToCustomizeDetail(id: string) {
    this.router.navigate(['/community/detail/', id]);
  }
  getTotal(data: any) {
    return this._customizedService.getTotalPrice(data);
  }
}
