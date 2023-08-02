import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PowerSupplyComponent } from './powersupply.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PowerSupplyComponent }
	])],
	exports: [RouterModule]
})
export class PowerSupplyRoutingModule { }
