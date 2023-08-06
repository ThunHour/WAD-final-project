import { Component } from '@angular/core';
import { MotherboardService } from 'src/app/services/motherboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-mother-board',
  templateUrl: './display-mother-board.component.html',
  styleUrls: ['./display-mother-board.component.scss'],
})
export class DisplayMotherBoardComponent {
  constructor(private _motherBoardService: MotherboardService, private router: Router) { }
  listMotherBoard: any[] = []

  async ngOnInit() {
    (await this._motherBoardService.getAllMotherBoards()).subscribe((data: any) => {
      this.listMotherBoard = data.data;
    })
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'motherBoard']);
  }
}
