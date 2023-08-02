import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomizedService } from 'src/app/services/customized.service';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private meta:Meta,private _router: Router, private _customizedService: CustomizedService) {
    this.meta.addTags([
      {
        name: 'title',
        content: 'Home Page'
      },
      {
        name: 'description',
        content: 'Home Page'
      },
      {
        name: 'keywords',
        content: 'customized Page , customzed kunapheap, kunapheap store,customze kunapheap'
      }
    ])
   }
  items: any[] = [

  ]
  async ngOnInit(): Promise<void> {
    (await this._customizedService.getAllCustomized()).subscribe(
      (data: any) => {
        this.items = data.data.slice(0, 3);;
      }
    );
  }
  viewDetail(id: string) {
    this._router.navigate(['/community/detail/', id]);
  }
}
