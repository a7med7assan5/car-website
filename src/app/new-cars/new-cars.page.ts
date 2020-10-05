import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-new-cars',
  templateUrl: 'new-cars.page.html',
  styleUrls: ['new-cars.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class newCarsPage implements OnInit {
  selectedLanguage: string;
  constructor(private translateConfigService: TranslateConfigService,

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit(): void {

  }
}
