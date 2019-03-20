import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignoutComponent } from './signout/signout.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SignoutComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
