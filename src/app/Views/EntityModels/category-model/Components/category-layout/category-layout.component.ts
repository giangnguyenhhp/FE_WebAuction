import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CategoryDto} from "../../Models/CategoryDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CategoryService} from "../../Services/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {UpdateCategoryComponent} from "../update-category/update-category.component";

@Component({
  selector: 'app-category-layout',
  templateUrl: './category-layout.component.html',
  styleUrls: ['./category-layout.component.scss']
})
export class CategoryLayoutComponent {
  dataSource = new MatTableDataSource<CategoryDto>();
  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getAllCategories();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  openCreateCategoryDialog() {
    this.dialog.open(CreateCategoryComponent).afterClosed().subscribe({
      next: (_) => {
        this.getAllCategories();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateCategoryDialog(category: CategoryDto) {
    this.dialog.open(UpdateCategoryComponent, {data: category}).afterClosed().subscribe({
      next: _ => {
        this.getAllCategories();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }

  deleteCategory(category: CategoryDto) {
    const result = confirm('Are you sure you want to delete');
    if (result) {
      this.categoryService.deleteCategory(category.categoryId).subscribe({
        next: () => {
          this.getAllCategories();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      })
    }
  }

  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        if (res) {
          this.dataSource.data = res
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }
}
