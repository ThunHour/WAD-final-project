import {
  Component,
  OnInit,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MaxValidator,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceFromServer } from '../services/auth.service';

import { SigninModel } from '../models/signIn.model';
import { SignupModel } from '../models/signUp.model';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})

export class AuthPageComponent implements OnInit {


  formGroup: FormGroup;
  formGroup1: FormGroup;
  user: SocialUser;

  loggedIn: boolean;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthServiceFromServer,
    private socialAuthService: SocialAuthService
  ) { }
  ngOnInit(): void {
    this.initForm();
    this.initForm1();
    // if (localStorage.getItem('token')) {
    //   this._router.navigate(['/homepage']);
    // }
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user)
    // });
    this.handleRedirectedRoute();
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
  facebook() {
    return this._authService.facebook();
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then
      (user => {
        this.user = user;
        console.log(user);
        console.log(this.user);

      }).catch(
        error =>
          console.log(error)
      );
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
    window.location.href = `http://localhost:8080/main/google`
  }
}
