import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Brand',

                        routerLink: ['/pages/brand']
                    }, {
                        label: 'Category',

                        routerLink: ['/pages/category']
                    },
                    {
                        label: 'Motherboard',

                        routerLink: ['/pages/motherboard']
                    },
                    {
                        label: 'Case',

                        routerLink: ['/pages/case']
                    },
                    {
                        label: 'Ram',
                        routerLink: ['/pages/ram']
                    },
                    {
                        label: 'Cpu',
                        routerLink: ['/pages/cpu']
                    },
                    {
                        label: 'Gpu',
                        routerLink: ['/pages/gpu']
                    },

                    {
                        label: 'Storage',
                        routerLink: ['/pages/storage']
                    },
                    {
                        label: 'Powersupply',
                        routerLink: ['/pages/powersupply']
                    },

                    {
                        label: 'Partner',
                        routerLink: ['/pages/partner']
                    },
                ]
            }


        ];
    }
}
