import { Injectable } from '@angular/core';
import { authHeader } from "./auth-header.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class PartnerService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }



  async getAllPartner() {

    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.partnerService}`, httpOptions)
  }
}


