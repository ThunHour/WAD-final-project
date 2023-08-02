import { SignupModel } from './../models/signUp.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { SigninModel } from '../models/signIn.model';
import { authHeader } from './auth-header.service';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class AuthServiceFromServer {

  constructor(private http: HttpClient, private _router: Router, private httpHeader: authHeader) {

  }

  signin(signinModel: SigninModel) {

    let httpOptions = {
      headers: this.httpHeader.authheader(),
      body: null,
      param: null,
    }
    return this.http.post(`${environment.base}${environment.mainService}/auth/login`, { email: signinModel.email, password: signinModel.password }, httpOptions)
  }

  signUp(signupModel: SignupModel) {
    let httpOptions = {
      headers: this.httpHeader.authheader(),
      body: null,
      param: null,
    }
    return this.http.post(`${environment.base}${environment.mainService}/auth/signup`, { email: signupModel.email, name: signupModel.name, password: signupModel.password, phonenumber: signupModel.phonenumber }, httpOptions)
  }
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    this._router.navigate(['/']);
  }

  facebook() {
    return this.http.get(`${environment.base}${environment.mainService}/google`)
  }
  
}
