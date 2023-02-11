import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class GpuService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllGpu() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "gpu/getAllGpu", httpOptions)
    }
    createGpu(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "gpu/create", data, httpOptions)
    }
    deleteGpu(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "gpu/deletePanel/" + id, httpOptions)
    }
    updateGpu(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "gpu/update/" + id, data, httpOptions)
    }
}
