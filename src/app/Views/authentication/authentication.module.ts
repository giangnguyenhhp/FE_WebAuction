import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EmailConfirmationComponent } from './Components/email-confirmation/email-confirmation.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent
  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class AuthenticationModule { }
