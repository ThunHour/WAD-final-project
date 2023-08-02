import { Component } from '@angular/core';
import { RamService } from 'src/app/services/ram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-ram',
  templateUrl: './display-ram.component.html',
  styleUrls: ['./display-ram.component.scss']
})
export class DisplayRamComponent {
  constructor(private _ramService: RamService,private router: Router) {}
  listRam: any[] = [];

  async ngOnInit() {
    (await this._ramService.getAllRams()).subscribe(
      (data: any) => {
        this.listRam = data.data;
      }
    );
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'ram']);
  }
}
