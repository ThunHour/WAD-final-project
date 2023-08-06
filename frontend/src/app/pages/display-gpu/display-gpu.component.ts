import { Component } from '@angular/core';
import { GpuService } from 'src/app/services/gpu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-gpu',
  templateUrl: './display-gpu.component.html',
  styleUrls: ['./display-gpu.component.scss']
})
export class DisplayGPUComponent {
  constructor(private _gpuService: GpuService,private router: Router) {}
  listGpu : any[] = []

  async ngOnInit() {
  (await this._gpuService.getAllGpus()).subscribe((data:any) => {
      this.listGpu = data.data;
      console.log(this.listGpu[0].gpu[0]);
    })
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'gpu']);
  }
}
