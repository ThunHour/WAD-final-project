import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { CustomizedModel } from '../models/customized.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class CustomizedService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  customized: CustomizedModel[] = []

  async getHistoryCustomized() {
    this.customized = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/customize/getAllCustomizeByUserId`, httpOptions)
  }
  async getAllCustomized() {
    this.customized = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/customize/community`, httpOptions)
  }
  async getRandom(id: string, type: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/customize/random/${id}?type=${type}`, httpOptions)
  }
  async saveCustomizedFromCommunity(id: string) {
    let data = {
      customId: id
    }
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.post(`${environment.base}${environment.mainService}/customize/copyCustomize`, data, httpOptions)
  }
  async shareCustomized(id: string) {
    let data = {
      id: id
    }
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.post(`${environment.base}${environment.mainService}/customize/share`, data, httpOptions)
  }
  async getCustomizeByid(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()

    }
    return this.http.get<any>(
      `${environment.base}${environment.mainService}/customize/getCustomizeById/${id}`, httpOptions,
    )
  }
  async deleteCustomized(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.delete(
      `${environment.base}${environment.mainService}/customize/delete/${id}`, httpOptions
    )
  }
  async editCustomized(data: any, id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.put(
      `${environment.base}${environment.mainService}/customize/update/${id}`, data, httpOptions
    )
  }
  getTotalPrice(data: any) {
    return data.case.price + data.cpu.price + data.gpu.price + data.motherBoard.price + data.powerSupply.price + data.ram.price + data.storage.price
  }
}
