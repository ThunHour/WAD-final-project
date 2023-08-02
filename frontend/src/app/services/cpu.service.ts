import { CpuModel } from './../models/cpu.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class CpuService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  cpus: CpuModel[] = []

  async getAllCpus() {
    this.cpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/cpu/getAllCpu`, httpOptions)
  }
  async getCpuById(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/cpu/getCpuById/${id}`, httpOptions)
  }
}
