import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MotherBoardComponent } from './motherboard.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MotherBoardComponent }
	])],
	exports: [RouterModule]
})
export class MotherBoardRoutingModule { }
