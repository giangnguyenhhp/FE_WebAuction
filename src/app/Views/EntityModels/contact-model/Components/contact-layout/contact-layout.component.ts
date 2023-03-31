import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {ContactDto} from "../../Models/ContactDto";
import {ContactService} from "../../Services/contact.service";
import {CreateContactComponent} from "../create-contact/create-contact.component";

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.scss']
})
export class ContactLayoutComponent {
  dataSource = new MatTableDataSource<ContactDto>();
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Message', 'Phone', 'Date', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllContacts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getAllContacts() {
    this.contactService.getAllContacts().subscribe({
      next: (res) => {
        if (res) {
          this.dataSource.data = res
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  openCreateContactDialog() {
    this.dialog.open(CreateContactComponent).afterClosed().subscribe({
      next: _ => {
        this.getAllContacts();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }


  openUpdateContactDialog(contact: ContactDto) {
    // this.dialog.open(UpdateContactComponent,{data:contact}).afterClosed().subscribe({
    //   next:_=>{
    //     this.getAllContacts();
    //   },
    //   error: (err:HttpErrorResponse)=>{
    //     console.log(err.message);
    //   }
    // })
  }

  deleteContact(contact: ContactDto) {
    const result = confirm("Are you sure you want to delete this card member?");
    if (result) {
      this.contactService.deleteContact(contact.contactId).subscribe({
        next: _ => {
          this.getAllContacts();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      })
    }
  }


}
