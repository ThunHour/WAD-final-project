import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { GpuModel } from '../models/gpu.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class GpuService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  gpus: GpuModel[] = []

  async getAllGpus() {
    this.gpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/gpu/getAllGpu`, httpOptions)


  }
  async getGpuById(id:string){
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get(`${environment.base}${environment.mainService}/gpu/getGpuById/${id}`, httpOptions)
  }
}
