import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryLayoutComponent } from './Components/category-layout/category-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryLayoutComponent
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
export class CategoryModelRoutingModule { }
