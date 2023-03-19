import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './Components/user-layout/user-layout.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CreateUserComponent } from './Components/create-user/create-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormModule, ListGroupModule} from "@coreui/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserProfileComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
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
        MatSelectModule,
        ShowHidePasswordModule,
        ListGroupModule,
    ]
})
export class UserModule { }
