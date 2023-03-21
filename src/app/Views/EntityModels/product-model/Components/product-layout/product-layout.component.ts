import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductDto} from "../../Models/ProductDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProductService} from "../../Service/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CreateProductDialogComponent} from "../create-product-dialog/create-product-dialog.component";
import {UpdateProductDialogComponent} from "../update-product-dialog/update-product-dialog.component";

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent {
  dataSource = new MatTableDataSource<ProductDto>();
  displayedColumns: string[] = ['Id', 'Name', 'Category', 'Price', 'Description', 'IsApproved', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  openCreateProductDialog() {
    this.dialog.open(CreateProductDialogComponent).afterClosed().subscribe(res => {
      if (res) {
        this.getAllProducts();
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }

  openUpdateProductDialog(product: ProductDto) {
    this.dialog.open(UpdateProductDialogComponent, {data: product}).afterClosed().subscribe(res => {
      if (res) {
        this.getAllProducts()
      }
    })
  }

  deleteProduct(product: ProductDto) {
    const result = confirm("Bạn có chắc chắn xóa không ?")
    if (result) {
      this.productService.deleteProduct(product.productId).subscribe({
          next: _ => {
            this.getAllProducts();
          },
          error: (err: HttpErrorResponse) => {
            console.log(err.message)
          }
        }
      )
    }
  }

  private getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: res => {
        if (res) {
          this.dataSource.data = res;
        }
      },
      error: (err: HttpErrorResponse) => {
        return err.message;
      }
    })
  }
}
