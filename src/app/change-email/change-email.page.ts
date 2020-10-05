import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { TranslateConfigService } from '../services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User, Role } from '../_models';



@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class changeEmailPage implements OnInit {
  email: string;
  confirm_email: string;
  matching_emails_group: FormGroup;
  selectedLanguage: string;
  validations_form: FormGroup;
  password: any;
  userpassword: any;
  showPassword=false;
  passwordToggleIcon="eye";
  static areEqual(formGroup: FormGroup) {
    let val;
    let valid = true;

    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];

        if (val === undefined) {
          val = control.value
        } else {
          if (val !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }

    if (valid) {
      return null;
    }

    return {
      areEqual: true
    };
  }

  constructor(private formBuilder: FormBuilder, private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  changeEmail(){
    
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == "eye"){
      this.passwordToggleIcon = "eye-off";
    }else{
      this.passwordToggleIcon = "eye";
    }
  }

  ngOnInit(): void {
    this.matching_emails_group = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      confirm_email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
    }, (formGroup: FormGroup) => {
      return changeEmailPage.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      matching_emails: this.matching_emails_group,
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });


  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'confirm_email': [
      { type: 'required', message: 'Confirm email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'matching_emails': [
      { type: 'areEqual', message: 'Email mismatch.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ]
  };
}
