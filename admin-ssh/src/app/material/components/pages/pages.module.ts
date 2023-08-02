import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FileUploadModule
    ]
})
export class PagesModule { }
