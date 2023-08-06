import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';
@Injectable()
export class StorageService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllStorage() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService + "storage/getAllStorage", httpOptions)
    }
    createStorage(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.mainService + "storage/create", data, httpOptions)
    }
    deleteStorage(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService + "storage/deletePanel/" + id, httpOptions)
    }
    updateStorage(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService + "storage/update/" + id, data, httpOptions)
    }
}
