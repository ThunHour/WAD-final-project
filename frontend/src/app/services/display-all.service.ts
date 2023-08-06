import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { MotherBoardModel } from '../models/motherboard.model';
import { CaseModel } from '../models/case.model';
import { GpuModel } from '../models/gpu.model';
import { PowerSupplyModel } from '../models/powersupply.model';
import { StorageModel } from '../models/storage.model';
import { RamModel } from '../models/ram.model';
import { CpuModel } from '../models/cpu.model';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class DisplayAllService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  motherBoards: MotherBoardModel[] = []

  async getAllMotherBoards() {
    this.motherBoards = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/motherBoard/getAllMotherBoard`, httpOptions)
  }

  cases: CaseModel[] = []

  async getAllCases() {
    this.cases = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/case/getAllCase`, httpOptions)
  }

  gpus: GpuModel[] = []

  async getAllGpus() {
    this.gpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/gpu/getAllGpu`, httpOptions)
  }

  powerSupplies: PowerSupplyModel[] = []

  async getAllPowerSupplies() {
    this.powerSupplies = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/powerSupply/getAllPowerSupply`, httpOptions)
  }

  storages: StorageModel[] = []

  async getAllStorages() {
    this.storages = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/storage/getAllStorage`, httpOptions)
  }

  rams: RamModel[] = []

  async getAllRams() {
    this.rams = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/ram/getAllRam`, httpOptions)
  }

  cpus: CpuModel[] = []

  async getAllCpus() {
    this.cpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`${environment.base}${environment.mainService}/cpu/getAllCpu`, httpOptions)


  }
}
