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
  carName:any;  
  kilometers:any;
  price:any;
  description:any;



  selectedLanguage: string;
  validations_form: FormGroup;
  hideState = false;
  hidePerformance = false;
  hideEnvironment = false;
  hideProperties = false;
  hideEquipment = false;
  constructor(private formBuilder: FormBuilder, private translateConfigService: TranslateConfigService) {
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
      description: new FormControl('', Validators.required),
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
    'description': [
      { type: 'required', message: 'Description is required.' }
    ],
  };


}
