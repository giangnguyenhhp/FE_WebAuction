import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentLayoutComponent} from "./Components/comment-layout/comment-layout.component";

const routes: Routes = [
  {
    path:'',
    component:CommentLayoutComponent
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
export class CommentModelRoutingModule { }
