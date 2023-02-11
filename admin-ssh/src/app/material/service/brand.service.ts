import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';
@Injectable()
export class BrandService {

    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllBrand() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url + "brand/getAllBrand", httpOptions)
    }
    createBrand(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url + "brand/create", data, httpOptions)
    }
    deleteBrand(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url + "brand/delete/" + id, httpOptions)
    }
    updateBrand(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url + "brand/update/" + id, data, httpOptions)
    }
}
