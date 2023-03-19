import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductLayoutComponent} from "./Components/product-layout/product-layout.component";

const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModelRoutingModule { }
