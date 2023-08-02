import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GpuComponent } from './gpu.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: GpuComponent }
	])],
	exports: [RouterModule]
})
export class GpuRoutingModule { }
