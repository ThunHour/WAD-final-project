import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ToastModule,
		MessagesModule,
		MessageModule,

    ],

})
export class AuthModule { }
