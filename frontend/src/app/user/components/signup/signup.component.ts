import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginDetailsGroup: FormGroup;
  introGroup: FormGroup;
  isLinear =  false;

  maxDate () {
    const now = new Date();
    const eighteenYearsAgo = now.setFullYear(now.getFullYear() - 18);
    return eighteenYearsAgo;
  }

  minDate () {
    const now = new Date();
    const longlongtimeago = now.setFullYear(1905);
    return longlongtimeago;
  }

  constructor(private _formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.loginDetailsGroup = this._formBuilder.group({
      email: ['', Validators.compose(
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(128)
        ]
      )],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(72)
        ]
      )],
    });
    this.introGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(24)
        ]
      )],
      dobCtrl: ['', Validators.compose(
        [
          Validators.required
        ]
      )]
    });
  }

}
