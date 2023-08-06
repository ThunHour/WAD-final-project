import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { CustomizedService } from './services/customized.service';
import { DisplayAllService } from './services/display-all.service';
import { CpuService } from './services/cpu.service';
import { RamService } from './services/ram.service';
import { StorageService } from './services/storage.service';
import { PowersupplyService } from './services/powersupply.service';
import { GpuService } from './services/gpu.service';
import { MotherboardService } from './services/motherboard.service';
import { authHeader } from './services/auth-header.service';
import { AuthServiceFromServer } from './services/auth.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DisplayAllComponent } from './pages/display-all/display-all.component';
import { DisplayRamComponent } from './pages/display-ram/display-ram.component';
import { DisplayMotherBoardComponent } from './pages/display-mother-board/display-mother-board.component';
import { DisplayCaseComponent } from './pages/display-case/display-case.component';
import { DisplayGPUComponent } from './pages/display-gpu/display-gpu.component';
import { DisplayPowerSupplyComponent } from './pages/display-power-supply/display-power-supply.component';
import { DisplayStorageComponent } from './pages/display-storage/display-storage.component';
import { DisplayCPUComponent } from './pages/display-cpu/display-cpu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseService } from './services/case.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HistoryComponent } from './pages/history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateService } from './services/create.service';
import { BrowserModule } from '@angular/platform-browser';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommunityComponent } from './pages/community/community.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { HistoryDetailComponent } from './pages/history-detail/history-detail.component';
import { CommunityDetailComponent } from './pages/community-detail/community-detail.component';
import { EditCustomizeComponent } from './pages/edit-customize/edit-customize.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PartnerService } from './services/partner.service';

import { SentryService } from './services/sentry.service';

const appRoutes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuardGuard] },
  { path: 'customize', component: CustomizeComponent, canActivate: [AuthGuardGuard] },
  { path: 'customize/:id', component: EditCustomizeComponent, canActivate: [AuthGuardGuard] },
  { path: 'community/detail/:id', component: CommunityDetailComponent, canActivate: [AuthGuardGuard] },
  { path: 'component', component: ComponentPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'component/:id/:type', component: ItemDetailComponent, canActivate: [AuthGuardGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuardGuard] },
  { path: 'history/detail/:id', component: HistoryDetailComponent, canActivate: [AuthGuardGuard] },
  { path: 'community', component: CommunityComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CustomizeComponent,
    ComponentPageComponent,
    DisplayAllComponent,
    DisplayRamComponent,
    DisplayMotherBoardComponent,
    DisplayCaseComponent,
    DisplayGPUComponent,
    DisplayPowerSupplyComponent,
    DisplayStorageComponent,
    DisplayCPUComponent,
    HistoryComponent,
    ItemDetailComponent,
    PageNotFoundComponent,
    CommunityComponent,
    LoadingComponent,
    HistoryDetailComponent,
    CommunityDetailComponent,
    EditCustomizeComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TabViewModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers,
    authHeader,
    AuthServiceFromServer,
    MotherboardService,
    CaseService,
    GpuService,
    PowersupplyService,
    StorageService,
    RamService,
    CpuService,
    DisplayAllService,
    CustomizedService,
    PartnerService,
    CreateService,

    // {
    //   provide: ErrorHandler,
    //   useValue: Sentry.createErrorHandler({
    //     showDialog: false,
    //   }),
    // },
    // {
    //   provide: Sentry.TraceService,
    //   deps: [Router],
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => () => {},
    //   deps: [Sentry.TraceService],
    //   multi: true,
    // },
    // { provide: ErrorHandler, useClass: GlobalErrorService },
    { provide: ErrorHandler, useClass: SentryService },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
