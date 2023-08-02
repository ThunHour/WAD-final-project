import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { NotfoundComponent } from './material/components/notfound/notfound.component';
import { authHeader } from './material/service/auth-header.service';
import { BrandService } from './material/service/brand.service';
import { CaseService } from './material/service/case.service';
import { CategoryService } from './material/service/category.service';
import { CpuService } from './material/service/cpu.service';
import { CustomerService } from './material/service/customer.service';
import { GpuService } from './material/service/gpu.service';
import { AuthGuard } from './material/service/guard/auth.guard';
import { LocalService } from './material/service/local-storage.service';
import { LoginService } from './material/service/login.service';
import { MotherBoardService } from './material/service/motherBoard.service';
import { PartnerService } from './material/service/partner.service';
import { PowerSupplyService } from './material/service/powersupply.service';
import { RamService } from './material/service/ram.service';
import { StorageService } from './material/service/storage.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MultiSelectModule,
        CaseService,
        CpuService,
        RamService,
        MotherBoardService, CustomerService,
        GpuService, PowerSupplyService, StorageService,
        PartnerService, LocalService, authHeader, AuthGuard, LoginService, BrandService, CategoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
