import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {
  rangeVal:string
  selectedLanguage: any;
  constructor(public platform: Platform, private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.platform.ready().then(()=>{
      this.rangeVal="100000";
    })
   }

   customAlertOptions: any = {
    header: 'Search By Category',
    translucent: true    
  };

}