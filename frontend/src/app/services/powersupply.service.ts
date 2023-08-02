import { PowerSupplyModel } from './../models/powersupply.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class PowersupplyService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  powerSupplies: PowerSupplyModel[] = []

  async getAllPowerSupplies() {
    this.powerSupplies = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/powerSupply/getAllPowerSupply`, httpOptions)


  }
  async getPowerSupplyById(id:string){
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get(`${environment.base}${environment.mainService}/powerSupply/getPowerSupplyById/${id}`, httpOptions)
  }
}
