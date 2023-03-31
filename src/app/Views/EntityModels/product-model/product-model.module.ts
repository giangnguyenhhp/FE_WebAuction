import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModelRoutingModule } from './product-model-routing.module';
import { ProductLayoutComponent } from './Components/product-layout/product-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { UpdateProductDialogComponent } from './Components/update-product-dialog/update-product-dialog.component';
import { CreateProductDialogComponent } from './Components/create-product-dialog/create-product-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    ProductLayoutComponent,
    UpdateProductDialogComponent,
    CreateProductDialogComponent
  ],
  imports: [
    CommonModule,
    ProductModelRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule
  ]
})
export class ProductModelModule { }
