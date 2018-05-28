import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  declarations: [SignupComponent, LoginComponent, ProfileComponent]
})
export class UserModule { }
