import { Injectable } from '@angular/core';
import { authHeader } from "./auth-header.service";
import { HttpClient } from '@angular/common/http';
import { MotherBoardModel } from '../models/motherboard.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class MotherboardService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  motherBoards: MotherBoardModel[] = []

  async getAllMotherBoards() {
    this.motherBoards = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/motherBoard/getAllMotherBoard`, httpOptions)


  }
  async getMotherBoardById(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/motherBoard/getMotherBoardById/${id}`, httpOptions)
  }
}


