import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { authHeader } from './auth-header.service';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private httpHeader: authHeader) { }

    login(email: string, password: string) {
        let httpOptions = {
            headers: this.httpHeader.authheader(''),
            param: null,

        }
        return this.http.post('http://localhost:3000/auth/login', { email: email, password: password }, httpOptions)
    }
}
