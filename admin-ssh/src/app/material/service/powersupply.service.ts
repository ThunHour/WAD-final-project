import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class PowerSupplyService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllMotherBoard() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base + environment.mainService + "powerSupply/getAllPowerSupply", httpOptions)
    }
    createMotherBoard(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base + environment.mainService + "powerSupply/create", data, httpOptions)
    }
    deleteMotherBoard(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base + environment.mainService + "powerSupply/deletePanel/" + id, httpOptions)
    }
    updateMotherBoard(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base + environment.mainService + "powerSupply/update/" + id, data, httpOptions)
    }
}
