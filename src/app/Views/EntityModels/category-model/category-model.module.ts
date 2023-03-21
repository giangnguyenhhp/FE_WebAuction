import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModelRoutingModule } from './category-model-routing.module';
import { CategoryLayoutComponent } from './Components/category-layout/category-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CategoryLayoutComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryModelRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class CategoryModelModule { }
