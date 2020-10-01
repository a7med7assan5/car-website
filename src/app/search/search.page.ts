import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {
  rangeVal:string
  constructor(public platform: Platform) {
    this.platform.ready().then(()=>{
      this.rangeVal="100000";
    })
   }

}