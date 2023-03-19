import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterLayoutComponent} from "./register/Components/register-layout/register-layout.component";
import {LoginLayoutComponent} from "./login/Components/login-layout/login-layout.component";
import {ForgotPasswordComponent} from "./Components/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./Components/reset-password/reset-password.component";
import {EmailConfirmationComponent} from "./Components/email-confirmation/email-confirmation.component";

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginLayoutComponent,
        loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
      },
      {
        path:'register',
        component:RegisterLayoutComponent,
        loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
      },
      {
        path:'forgotPassword',
        component:ForgotPasswordComponent
      },
      {
        path:'resetPassword',
        component:ResetPasswordComponent
      },
      {
        path:'emailConfirmation',
        component:EmailConfirmationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
