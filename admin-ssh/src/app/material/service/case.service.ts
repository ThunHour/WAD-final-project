import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class CaseService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllCase() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "case/getAllCase", httpOptions)
    }
    createCase(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "case/create", data, httpOptions)
    }
    deleteCase(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "case/deletePanel/" + id, httpOptions)
    }
    updateCase(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "case/update/" + id, data, httpOptions)
    }
}
