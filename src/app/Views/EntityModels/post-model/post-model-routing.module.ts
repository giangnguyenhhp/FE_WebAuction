import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostLayoutComponent} from "./Components/post-layout/post-layout.component";
import {CreatePostComponent} from "./Components/create-post/create-post.component";
import {UpdatePostComponent} from "./Components/update-post/update-post.component";
import {PostDetailsComponent} from "./Components/post-details/post-details.component";

const routes: Routes = [
  {
    path:'',
    component:PostLayoutComponent,
  },
  {
    path:'details',
    component:PostDetailsComponent
  },
  {
    path:'create',
    component:CreatePostComponent
  },
  {
    path:'update',
    component:UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModelRoutingModule { }
