import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { CaseModel } from '../models/case.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class CaseService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  cases: CaseModel[] = []

  async getAllCases() {
    this.cases = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/case/getAllCase`, httpOptions)


  }
  async getCaseById(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/case/getCaseById/${id}`, httpOptions)
  }
}
