import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModelRoutingModule } from './post-model-routing.module';
import { PostLayoutComponent } from './Components/post-layout/post-layout.component';
import { CreatePostComponent } from './Components/create-post/create-post.component';
import { UpdatePostComponent } from './Components/update-post/update-post.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { PostDetailsComponent } from './Components/post-details/post-details.component';


@NgModule({
  declarations: [
    PostLayoutComponent,
    CreatePostComponent,
    UpdatePostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostModelRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class PostModelModule { }
