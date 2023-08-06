import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceFromServer } from '../services/auth.service';

import { SigninModel } from '../models/signIn.model';
import { SignupModel } from '../models/signUp.model';

import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})

export class AuthPageComponent implements OnInit {


  formGroup: FormGroup;
  formGroup1: FormGroup;
  siteKey: string = '';


  loggedIn: boolean;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthServiceFromServer
  ) { }
  sendCaptchaResponse(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  backendGoogleLoginUrl = ""
  ngOnInit(): void {
    this.siteKey = environment.siteKey
    this.initForm();
    this.initForm1();
    this.handleRedirectedRoute();
    this.backendGoogleLoginUrl = `${environment.base}${environment.mainService}/google`
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  initForm1() {
    this.formGroup1 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
    });
  }

  @ViewChild('container') container: ElementRef;

  async signIn() {
    if (this.formGroup.valid) {
      await this._authService
        .signin(
          new SigninModel(
            this.formGroup.value.email,
            this.formGroup.value.password
          )
        )
        .toPromise()
        .then((res: any) => {

          if (res['data'].role === 'USER') {
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('refreshToken', res.refreshToken);
            this._router.navigate(['/homepage']);
          }
        });
    } else {
      console.log('wrong');
    }

    this.container.nativeElement.classList.remove('right-panel-active');
  }

  async signUp() {
    if (this.formGroup1.valid) {
      this._authService
        .signUp(
          new SignupModel(
            this.formGroup1.value.email,
            this.formGroup1.value.name,
            this.formGroup1.value.phonenumber,
            this.formGroup1.value.password
          )
        )
        .toPromise().then(
          (res: any) => {
            try {
              if (res['data'].role === 'USER') {
                localStorage.setItem('token', res.accessToken);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('refreshToken', res.refreshToken);
                this._router.navigate(['/homepage']);

              }
            } catch (error) {
              console.log("User already exist");
            }
          }
        )

    }
    this.container.nativeElement.classList.add('right-panel-active');
  }
  handleRedirectedRoute() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to the home page or any other protected route
      this._router.navigate(['/homepage']);
    } else {
      this._router.navigate(['/']);
    }
  }
  google() {
    window.location.href = this.backendGoogleLoginUrl
  }
}
