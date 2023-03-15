import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserDto} from "../../Models/UserDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../Services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateUserComponent} from "../create-user/create-user.component";
import {UpdateUserComponent} from "../update-user/update-user.component";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
  displayedColumns: string[] = ["Id", "UserName", "Email", "Address", "PhoneNumber", "Update", "Delete"];
  dataSource = new MatTableDataSource<UserDto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  applyFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.paginator.firstPage()
    }
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe(res => {
      if (res) {
        this.dataSource.data = res;
      }
    })
  }

  openCreateUserDialog() {
    this.dialog.open(CreateUserComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getAllUsers();
      }
    })
  }

  openUpdateRoleDialog(row: UserDto) {
    this.dialog.open(UpdateUserComponent,{data:row}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllUsers();
      }
    })
  }

  deleteRole(row: UserDto) {
    const result = confirm("Bạn có chắc chắn xóa không ?");
    if (result) {
      this.userService.deleteUser(row.id).subscribe(_ => {
        this.getAllUsers();
      })
    }
  }
}
