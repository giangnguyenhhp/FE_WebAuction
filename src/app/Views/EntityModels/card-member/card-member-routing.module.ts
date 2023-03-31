import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardMemberLayoutComponent} from "./Components/card-member-layout/card-member-layout.component";

const routes: Routes = [
  {
    path: '',
    component: CardMemberLayoutComponent
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
export class CardMemberRoutingModule { }
