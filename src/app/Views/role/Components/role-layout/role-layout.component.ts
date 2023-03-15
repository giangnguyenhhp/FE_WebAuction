import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RoleDto} from "../../Models/RoleDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {RoleService} from "../../Service/role.service";
import {CreateRoleComponent} from "../create-role/create-role.component";
import {UpdateRoleComponent} from "../update-role/update-role.component";

@Component({
  selector: 'app-role-layout',
  templateUrl: './role-layout.component.html',
  styleUrls: ['./role-layout.component.scss']
})
export class RoleLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<RoleDto>();
  displayedColumns: string[] = ['Id', 'Name', 'ConcurrencyStamp', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roleService: RoleService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(res => {
      if (res) {
        this.dataSource.data = res
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }

  openCreateRoleDialog() {
    this.dialog.open(CreateRoleComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllRoles()
      }
    })
  }

  openUpdateRoleDialog(role: RoleDto) {
    this.dialog.open(UpdateRoleComponent,{data:role}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllRoles()
      }
    })
  }

  deleteRole(role:RoleDto) {
    const result = confirm(`Are you sure you want to delete this role : ${role.name}`);
    if (result) {
      this.roleService.deleteRole(role).subscribe(res=>{
        if(res){
          this.getAllRoles()
        }
      })
    }
  }
}
