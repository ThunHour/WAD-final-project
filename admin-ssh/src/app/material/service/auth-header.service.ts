import { LocalService } from "./local-storage.service";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class authHeader {
    constructor(private localStore: LocalService) {

    }
    authheader(key: string): HttpHeaders {
        let token = this.localStore.getData(key);
        if (token) {
            return new HttpHeaders({
                Authorization: 'Bearer ' + token.token, 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Origin': '*',
            });
        } else {
            return new HttpHeaders({ 'Content-Type': 'application/json' });
        }
    }
    authHeaderWithFile(key: string): HttpHeaders {
        let token = this.localStore.getData(key);
        if (token) {
            return new HttpHeaders({
                Authorization: 'Bearer ' + token.token, 'Content-Disposition': 'form-data', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Origin': '*',
            });
        } else {
            return new HttpHeaders({
                'Content-Disposition': 'form-data', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Origin': '*',
            });
        }
    }
}
