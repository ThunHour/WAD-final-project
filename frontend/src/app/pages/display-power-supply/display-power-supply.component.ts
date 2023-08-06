import { PowersupplyService } from './../../services/powersupply.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-power-supply',
  templateUrl: './display-power-supply.component.html',
  styleUrls: ['./display-power-supply.component.scss'],
})
export class DisplayPowerSupplyComponent {
  constructor(private _powersupplyService: PowersupplyService,private router: Router) {}
  listPowerSupply: any[] = [];

  async ngOnInit() {
    (await this._powersupplyService.getAllPowerSupplies()).subscribe(
      (data: any) => {
        this.listPowerSupply = data.data;
      }
    );
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'powerSupply']);
  }
}
