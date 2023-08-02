import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class GpuService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllGpu() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService+ "gpu/getAllGpu", httpOptions)
    }
    createGpu(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.mainService+ "gpu/create", data, httpOptions)
    }
    deleteGpu(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService+ "gpu/deletePanel/" + id, httpOptions)
    }
    updateGpu(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService+ "gpu/update/" + id, data, httpOptions)
    }
}
