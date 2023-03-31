import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactLayoutComponent} from "./Components/contact-layout/contact-layout.component";

const routes: Routes = [
  {
    path:'',
    component:ContactLayoutComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactModelRoutingModule { }
