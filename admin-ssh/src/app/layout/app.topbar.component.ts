import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalService } from '../material/service/local-storage.service';
import { LayoutService } from "./service/app.layout.service";


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(private local: LocalService,public layoutService: LayoutService,private _router: Router) { }
    logout(){

        this.local.clearData()
        this._router.navigate(['auth/login'])
        return

    }
}
