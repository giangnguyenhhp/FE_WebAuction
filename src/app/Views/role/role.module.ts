import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleLayoutComponent } from './Components/role-layout/role-layout.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CreateRoleComponent } from './Components/create-role/create-role.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateRoleComponent } from './Components/update-role/update-role.component';
import {FormModule} from "@coreui/angular";


@NgModule({
  declarations: [
    RoleLayoutComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormModule,
  ]
})
export class RoleModule { }
