import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModelRoutingModule } from './comment-model-routing.module';
import { CommentLayoutComponent } from './Components/comment-layout/comment-layout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PostNewCommentComponent } from './Components/post-new-comment/post-new-comment.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    CommentLayoutComponent,
    PostNewCommentComponent
  ],
  imports: [
    CommonModule,
    CommentModelRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class CommentModelModule { }
