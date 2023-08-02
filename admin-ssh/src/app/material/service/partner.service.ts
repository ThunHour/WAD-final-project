import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class PartnerService {
    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    getAllPartner() {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token')
        }
        return this.http.get(environment.base+environment.partnerService, httpOptions)
    }
    createPartner(data: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,

        }
        return this.http.post(environment.base+environment.partnerService, data, httpOptions)
    }

    deletePartner(id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
            param: null,


        }
        return this.http.delete(environment.base+environment.partnerService + id, httpOptions)
    }
    updatePartner(data: any, id: any) {
        let httpOptions = {
            headers: this.httpHeader.authHeaderWithFile('token'),
        }
        return this.http.put(environment.base+environment.partnerService + id, data, httpOptions)
    }
}
