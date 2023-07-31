import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { authHeader } from './auth-header.service';
import { Base } from './base';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private httpHeader: authHeader,private base:Base) { }

    login(email: string, password: string) {
        let httpOptions = {
            headers: this.httpHeader.authheader(''),
            param: null,

        }
        return this.http.post(`${this.base.url}auth/login`, { email: email, password: password }, httpOptions)
    }
}
