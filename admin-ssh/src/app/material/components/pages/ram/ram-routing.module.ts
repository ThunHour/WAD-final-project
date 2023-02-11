import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RamComponent } from './ram.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RamComponent }
	])],
	exports: [RouterModule]
})
export class RamRoutingModule { }
