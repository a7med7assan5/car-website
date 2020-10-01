import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-add-car',
  templateUrl: 'add-car.page.html',
  styleUrls: ['add-car.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class addCarPage implements OnInit {
 
  selectedLanguage: string;
  validations_form: FormGroup;

  constructor(private formBuilder: FormBuilder, private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      carName: new FormControl('', Validators.required),
      kilometers: new FormControl('', Validators.compose([
        Validators.max(200),
        Validators.min(0),
        Validators.required
      ])),
      price: new FormControl('', Validators.compose([
        Validators.max(200),
        Validators.min(0),
        Validators.required
      ])),
    });


  }

  validation_messages = {
    'carName': [
      { type: 'required', message: 'Car Name is required.' }
    ],
    'kilometers': [
      { type: 'required', message: 'Kilometers is required.' },
      { type: 'min', message: 'Kilometers must be at least 0.' },
      { type: 'max', message: 'Kilometers cannot be more than 200.' },
    ],
    'price': [
      { type: 'required', message: 'Kilometers is required.' },
      { type: 'min', message: 'Kilometers must be at least 0.' },
      { type: 'max', message: 'Kilometers cannot be more than 200.' },
    ],
  };


}
