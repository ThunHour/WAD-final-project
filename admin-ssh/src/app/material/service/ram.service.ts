import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class RamService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllRam() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "ram/getAllRam", httpOptions)
    }
    createRam(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "ram/create", data, httpOptions)
    }
    deleteRam(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "ram/deletePanel/" + id, httpOptions)
    }
    updateRam(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "ram/update/" + id, data, httpOptions)
    }
}
