import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class homePage implements OnInit {
      // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  RecentCarsdata: any;
  sub: any;
  MostViewsCarsdata: any;
  selectedLanguage: string;
  constructor(private appservices: AppServicesService, private _Activatedroute: ActivatedRoute,
    private translateConfigService: TranslateConfigService,

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
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

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.getRecentCars();
    this.getMostViewsCars();
  }
}
