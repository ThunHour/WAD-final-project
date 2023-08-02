import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class RamService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllRam() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService + "ram/getAllRam", httpOptions)
    }
    createRam(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),

        }
        console.log(data);

        return this.http.post(environment.base+environment.mainService + "ram/create", data, httpOptions)
    }
    deleteRam(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService + "ram/deletePanel/" + id, httpOptions)
    }
    updateRam(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService + "ram/update/" + id, data, httpOptions)
    }
}
