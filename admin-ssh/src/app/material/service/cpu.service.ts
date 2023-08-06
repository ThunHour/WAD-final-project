import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class CpuService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllCpu() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService + "cpu/getAllCpu", httpOptions)
    }
    createCpu(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            paCpu: null,

        }
        return this.http.post(environment.base+environment.mainService + "cpu/create", data, httpOptions)
    }
    deleteCpu(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            paCpu: null,

        }
        return this.http.delete(environment.base+environment.mainService + "cpu/deletePanel/" + id, httpOptions)
    }
    updateCpu(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService + "cpu/update/" + id, data, httpOptions)
    }
}
