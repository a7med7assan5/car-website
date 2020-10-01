import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: 'car.page.html',
  styleUrls: ['car.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class carPage implements OnInit {

  constructor(private appservices: AppServicesService, private _Activatedroute: ActivatedRoute,
    // private translateConfigService: TranslateConfigService,

  ) {
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }


  ngOnInit(): void {

  }
}
