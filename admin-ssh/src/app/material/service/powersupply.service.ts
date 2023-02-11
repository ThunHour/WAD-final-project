import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class PowerSupplyService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllMotherBoard() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "powerSupply/getAllPowerSupply", httpOptions)
    }
    createMotherBoard(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "powerSupply/create", data, httpOptions)
    }
    deleteMotherBoard(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "powerSupply/deletePanel/" + id, httpOptions)
    }
    updateMotherBoard(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "powerSupply/update/" + id, data, httpOptions)
    }
}
