import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class CaseService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllCase() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService + "case/getAllCase", httpOptions)
    }
    createCase(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.mainService + "case/create", data, httpOptions)
    }
    deleteCase(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService + "case/deletePanel/" + id, httpOptions)
    }
    updateCase(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService + "case/update/" + id, data, httpOptions)
    }
}
