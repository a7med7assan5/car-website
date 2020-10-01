import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})
export class signUpPage {
  name: string;
  email: string;
  password: string;
  role: any;
  dataOfJoin: any;
  selectedLanguage: string;
  validations_form: FormGroup;
  customPopoverOptions: any;
  showPassword = false;
  passwordToggleIcon = "eye";
  constructor( private formBuilder: FormBuilder,
    private translateConfigService: TranslateConfigService) {
          this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }

    togglePassword(): void {
      this.showPassword = !this.showPassword;
  
      if (this.passwordToggleIcon == "eye") {
        this.passwordToggleIcon = "eye-off";
      } else {
        this.passwordToggleIcon = "eye";
      }
    }

    languageChanged() {
      this.translateConfigService.setLanguage(this.selectedLanguage);
    }

    ngOnInit(): void {
      this.validations_form = this.formBuilder.group({
        id: new FormControl('', Validators.compose([
          Validators.required
        ])),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(8),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
      });
  
  
    }
  
    validation_messages = {
      'id': [
        { type: 'required', message: 'ID is required.' }
      ],
      'name': [
        { type: 'required', message: 'Name is required.' }
      ],
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Please enter a valid email.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.' },
        { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
      ]
    };
  
}
