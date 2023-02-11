import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnerComponent } from './partner.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PartnerComponent }
	])],
	exports: [RouterModule]
})
export class PartnerRoutingModule { }
