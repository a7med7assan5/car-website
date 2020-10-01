import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class homePage implements OnInit {
  RecentCarsdata: any;
  sub: any;
  MostViewsCarsdata: any;

  constructor(private appservices: AppServicesService, private _Activatedroute: ActivatedRoute,
    // private translateConfigService: TranslateConfigService,

  ) {
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  getRecentCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.getRecentCars().subscribe(res => {
        this.RecentCarsdata = res;
        console.log(res)
      }, err => {
        this.RecentCarsdata = err;
      }
      );
    });
  }
  getMostViewsCars() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.appservices.MostViewsCars().subscribe(res => {
        this.MostViewsCarsdata = res;
        console.log(res)
      }, err => {
        this.MostViewsCarsdata = err;
      }
      );
    });
  }

  ngOnInit(): void {
    this.getRecentCars();
    this.getMostViewsCars();
  }
}
