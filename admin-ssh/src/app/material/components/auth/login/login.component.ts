import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LocalService } from 'src/app/material/service/local-storage.service';
import { LoginService } from 'src/app/material/service/login.service';
import { environment } from 'src/environments/environment.prod';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi_router-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
    ,
    providers: [MessageService]
})
export class LoginComponent {
    siteKey: string = '';
    valCheck: string[] = ['remember'];
    email: string = "";
    password: string = "";
    msgs: Message[] = [];

    constructor(private auth: LoginService, private service: MessageService, private local: LocalService, private _router: Router, public layoutService: LayoutService) { }
    sendCaptchaResponse(captchaResponse: any) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
    ngOnInit(): void {
        this.siteKey = environment.siteKey
        if (this.local.getData("token").token !== "") {
            this._router.navigate(['pages/brand'])
            return
        }
    }
    async login() {


        this.auth.login(this.email, this.password).subscribe(async (res: any) => {

            if (res.message === "Login user successfully" && res.data.role === "ADMIN") {
                await this.service.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
                this.local.saveData("token", res.accessToken)
                this.local.saveData("username", res.data.name)
                this._router.navigate(['pages/brand'])
            }
            else {
                this.service.add({ severity: 'error', summary: 'unauthorized', detail: 'This pase allow only admin' });
            }

        }, err => {
            this.service.add({ severity: 'error', summary: 'Login Fail', detail: 'Please check your credeatail' });
        })





    }

}
