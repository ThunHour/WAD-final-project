import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class BrandService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllBrand() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService + "brand/getAllBrand", httpOptions)
    }
    createBrand(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.mainService + "brand/create", data, httpOptions)
    }
    deleteBrand(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService + "brand/delete/" + id, httpOptions)
    }
    updateBrand(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService + "brand/update/" + id, data, httpOptions)
    }
}
