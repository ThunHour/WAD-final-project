import { Component } from '@angular/core';

import { CpuService } from 'src/app/services/cpu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-cpu',
  templateUrl: './display-cpu.component.html',
  styleUrls: ['./display-cpu.component.scss']
})
export class DisplayCPUComponent {
  constructor(private _cpuService: CpuService, private router: Router) { }
  listCpu: any[] = []

  async ngOnInit() {
    (await this._cpuService.getAllCpus()).subscribe((data: any) => {
      this.listCpu = data.data;

    })
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'cpu']);
  }
}
