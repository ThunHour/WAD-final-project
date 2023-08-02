import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CpuComponent } from './cpu.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CpuComponent }
	])],
	exports: [RouterModule]
})
export class CpuRoutingModule { }
