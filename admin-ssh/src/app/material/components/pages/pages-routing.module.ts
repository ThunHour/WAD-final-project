import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'brand', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule) },
        { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CatoryModule) },
        { path: 'motherboard', loadChildren: () => import('./motherboard/motherboard.module').then(m => m.MotherBoardModule) },
        { path: 'case', loadChildren: () => import('./case/case.module').then(m => m.CaseModule) },
        { path: 'cpu', loadChildren: () => import('./cpu/cpu.module').then(m => m.CpuModule) },
        { path: 'gpu', loadChildren: () => import('./gpu/gpu.module').then(m => m.GpuModule) },
        { path: 'storage', loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule) },
        { path: 'ram', loadChildren: () => import('./ram/ram.module').then(m => m.RamModule) },
        { path: 'powersupply', loadChildren: () => import('./powersupply/powersupply.module').then(m => m.PowerSupplyModule) },
        { path: 'partner', loadChildren: () => import('./partner/partner.module').then(m => m.PartnerModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
