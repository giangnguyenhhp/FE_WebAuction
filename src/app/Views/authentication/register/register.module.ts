import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterLayoutComponent } from './Components/register-layout/register-layout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegisterLayoutComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    ShowHidePasswordModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
