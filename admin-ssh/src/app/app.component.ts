import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LocalService } from './material/service/local-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,private local: LocalService,private router:Router) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        if(this.local.getData('token') == null){
            this.router.navigate(['/auth/login']);
        }

    }
}
