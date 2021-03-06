import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss']
})
export class signInPage implements OnInit {
  email: string;
  password: string;
  selectedLanguage: string;
  validations_form: FormGroup;
  showPassword = false;
  passwordToggleIcon = "eye";
  constructor(private translateConfigService: TranslateConfigService, private formBuilder: FormBuilder) {
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

  loginUser() {
    // let idinput = document.getElementById("idinput") as HTMLInputElement;
    // let passwordinput = document.getElementById("passwordinput") as HTMLInputElement;
    // this.Id = idinput.value, this.password = passwordinput.value;
    // this.authservice.login(this.Id, this.password).pipe(first()).subscribe(res => {
    //   this.alertservice.showAlert("&#xE876;", "success", "You have successfully logged in!");
    //   this.validations_form.reset();
    //   this.router.navigate([this.returnUrl]);

    // }, err => {
    //   this.alertservice.showAlert("&#xE5CD;", "error", "ID or password is incorrect. please try logging in again!");
    // }
    // );

  }
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
      ])),
    });

  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
    ]
  };
}
