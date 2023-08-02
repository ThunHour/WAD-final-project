import { Component } from '@angular/core';
import { CaseService } from 'src/app/services/case.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-case',
  templateUrl: './display-case.component.html',
  styleUrls: ['./display-case.component.scss']
})
export class DisplayCaseComponent {
  constructor(private _caseService: CaseService, private router: Router) { }
  listCase: any[] = []

  async ngOnInit() {
    (await this._caseService.getAllCases()).subscribe((data: any) => {
      this.listCase = data.data;
    })
  }
  goToDetail(id: string) {
    this.router.navigate(['/component', id, 'case']);
  }
}
