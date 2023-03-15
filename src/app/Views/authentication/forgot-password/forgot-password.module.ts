import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordLayoutComponent } from './Components/forgot-password-layout/forgot-password-layout.component';


@NgModule({
  declarations: [
    ForgotPasswordLayoutComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
