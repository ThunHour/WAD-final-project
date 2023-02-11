import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class CpuService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllCpu() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "cpu/getAllCpu", httpOptions)
    }
    createCpu(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            paCpu: null,

        }
        return this.http.post(this.base.url + "cpu/create", data, httpOptions)
    }
    deleteCpu(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            paCpu: null,

        }
        return this.http.delete(this.base.url + "cpu/deletePanel/" + id, httpOptions)
    }
    updateCpu(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "cpu/update/" + id, data, httpOptions)
    }
}
