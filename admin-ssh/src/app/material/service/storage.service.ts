import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class StorageService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllStorage() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "storage/getAllStorage", httpOptions)
    }
    createStorage(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "storage/create", data, httpOptions)
    }
    deleteStorage(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "storage/deletePanel/" + id, httpOptions)
    }
    updateStorage(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "storage/update/" + id, data, httpOptions)
    }
}
