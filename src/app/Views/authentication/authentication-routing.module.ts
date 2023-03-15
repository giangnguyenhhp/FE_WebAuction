import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterLayoutComponent} from "./register/Components/register-layout/register-layout.component";
import {LoginLayoutComponent} from "./login/Components/login-layout/login-layout.component";
import {
  ForgotPasswordLayoutComponent
} from "./forgot-password/Components/forgot-password-layout/forgot-password-layout.component";

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
        component:ForgotPasswordLayoutComponent,
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
