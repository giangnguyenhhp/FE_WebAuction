import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardMemberRoutingModule } from './card-member-routing.module';
import { CardMemberLayoutComponent } from './Components/card-member-layout/card-member-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateCardMemberComponent } from './Components/create-card-member/create-card-member.component';
import { UpdateCardMemberComponent } from './Components/update-card-member/update-card-member.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CardMemberLayoutComponent,
    CreateCardMemberComponent,
    UpdateCardMemberComponent
  ],
  imports: [
    CommonModule,
    CardMemberRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class CardMemberModule { }
