import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class CategoryService {
    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllCategory() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.mainService+"category/getAllCategory", httpOptions)
    }
    createCategory(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.mainService+"category/create", data, httpOptions)
    }

    deleteCategory(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(environment.base+environment.mainService+"category/delete/" + id, httpOptions)
    }
    updateCategory(data: any,id:any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.mainService+"category/update/"+id, data, httpOptions)
    }
}
