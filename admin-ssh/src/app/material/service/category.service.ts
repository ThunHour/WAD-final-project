import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';

@Injectable()
export class CategoryService {
    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllCategory() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.url+"category/getAllCategory", httpOptions)
    }
    createCategory(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.url+"category/create", data, httpOptions)
    }

    deleteCategory(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.delete(this.base.url+"category/delete/" + id, httpOptions)
    }
    updateCategory(data: any,id:any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.url+"category/update/"+id, data, httpOptions)
    }
}
