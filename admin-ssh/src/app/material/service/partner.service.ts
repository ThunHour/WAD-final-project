import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { Base } from './base';

@Injectable()
export class PartnerService {
    constructor(private http: HttpClient, private httpHeader: authHeader, private base: Base) { }

    getAllPartner() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(this.base.partner, httpOptions)
    }
    createPartner(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(this.base.partner, data, httpOptions)
    }

    deletePartner(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,


        }
        return this.http.delete(this.base.partner + id, httpOptions)
    }
    updatePartner(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(this.base.partner + id, data, httpOptions)
    }
}
