import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotProductModelRoutingModule } from './lot-product-model-routing.module';
import { LotProductLayoutComponent } from './Components/lot-product-layout/lot-product-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateLotProductDialogComponent } from './Components/create-lot-product-dialog/create-lot-product-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import {UpDateLotProductComponent} from './Components/upate-lot-product/up-date-lot-product.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    LotProductLayoutComponent,
    CreateLotProductDialogComponent,
    ViewProductsComponent,
    UpDateLotProductComponent
  ],
  imports: [
    CommonModule,
    LotProductModelRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class LotProductModelModule { }
