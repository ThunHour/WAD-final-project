import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { RamModel } from '../models/ram.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class RamService {
  constructor(private http: HttpClient, private _authHeader: authHeader,
  ) { }

  rams: RamModel[] = []

  async getAllRams() {
    this.rams = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/ram/getAllRam`, httpOptions)


  }
  async getRamById(id:string){
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get(`${environment.base}${environment.mainService}/ram/getRamById/${id}`, httpOptions)
  }
}
