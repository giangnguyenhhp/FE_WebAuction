import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotProductLayoutComponent} from "./Components/lot-product-layout/lot-product-layout.component";

const routes: Routes = [
  {
    path: '',
    component: LotProductLayoutComponent
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
export class LotProductModelRoutingModule {
}
