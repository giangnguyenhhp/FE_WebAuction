import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModelRoutingModule } from './contact-model-routing.module';
import { ContactLayoutComponent } from './Components/contact-layout/contact-layout.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateContactComponent } from './Components/create-contact/create-contact.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContactLayoutComponent,
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    ContactModelRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ContactModelModule { }
