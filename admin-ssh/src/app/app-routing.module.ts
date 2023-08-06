import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './material/components/notfound/notfound.component';
import { AuthGuard } from './material/service/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'pages', loadChildren: () => import('./material/components/pages/pages.module').then(m => m.PagesModule) }
                ],
                canActivate: [AuthGuard]
            },
            { path: 'auth', loadChildren: () => import('./material/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/auth/login' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
