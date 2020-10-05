import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-car',
  templateUrl: 'car.page.html',
  styleUrls: ['car.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class carPage implements OnInit {
  selectedLanguage: string;
  hideState = false;
  hidePerformance = false;
  hideEnvironment = false;
  hideProperties = false;
  hideEquipment = false;
  constructor(private appservices: AppServicesService, private _Activatedroute: ActivatedRoute,
    private translateConfigService: TranslateConfigService,

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  hide(divID) {
    if (divID == "state") {
      //Hide State
      if (this.hideState == false)
        this.hideState = true;
      else if (this.hideState == true) {
        this.hideState = false;
      }
    }
    else if (divID == "performance") {
      //Hide Performance
      if (this.hidePerformance == false)
        this.hidePerformance = true;
      else if (this.hidePerformance == true) {
        this.hidePerformance = false;
      }
    }
    else if (divID == "environment") {
      //Hide Environment
      if (this.hideEnvironment == false)
        this.hideEnvironment = true;
      else if (this.hideEnvironment == true) {
        this.hideEnvironment = false;
      }
    }
    else if (divID == "properties") {
      //Hide Properties
      if (this.hideProperties == false)
        this.hideProperties = true;
      else if (this.hideProperties == true) {
        this.hideProperties = false;
      }
    }
    else if (divID == "equipment") {
      //Hide Equipment
      if (this.hideEquipment == false)
        this.hideEquipment = true;
      else if (this.hideEquipment == true) {
        this.hideEquipment = false;
      }
    }

  }


  ngOnInit(): void {

  }
}
