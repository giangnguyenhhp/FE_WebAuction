import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CardMemberDto} from "../../Models/CardMemberDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CardMemberService} from "../../Services/card-member.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CreateCardMemberComponent} from "../create-card-member/create-card-member.component";
import {UpdateCardMemberComponent} from "../update-card-member/update-card-member.component";

@Component({
  selector: 'app-card-member-layout',
  templateUrl: './card-member-layout.component.html',
  styleUrls: ['./card-member-layout.component.scss']
})
export class CardMemberLayoutComponent {
  dataSource = new MatTableDataSource<CardMemberDto>();
  displayedColumns: string[] = ['Id','Name', 'Address','Phone', 'Deposit','User','Update','Delete'];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(
    private cardMemberService : CardMemberService,
    private dialog : MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllCardMembers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  private getAllCardMembers() {
    this.cardMemberService.getAllCardMembers().subscribe({
      next:(res)=>{
        if(res){
          this.dataSource.data = res
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.message);
      }
    })
  }

  openCreateCardMemberDialog() {
    this.dialog.open(CreateCardMemberComponent).afterClosed().subscribe({
      next:_=>{
        this.getAllCardMembers();
      },
      error: (err:HttpErrorResponse)=>{
        console.log(err.message);
      }
    })
  }


  openUpdateCardMemberDialog(cardMember:CardMemberDto) {
    this.dialog.open(UpdateCardMemberComponent,{data:cardMember}).afterClosed().subscribe({
      next:_=>{
        this.getAllCardMembers();
      },
      error: (err:HttpErrorResponse)=>{
        console.log(err.message);
      }
    })
  }

  deleteCardMember(cardMember:CardMemberDto) {
    const result = confirm("Are you sure you want to delete this card member?");
    if(result){
      this.cardMemberService.deleteCardMember(cardMember.cardId).subscribe({
        next:_=>{
          this.getAllCardMembers();
        },
        error: (err:HttpErrorResponse)=>{
          console.log(err.message);
        }
      })
    }
  }


}
