import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LotProductDto} from "../../Models/LotProductDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LotProductService} from "../../Services/lot-product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {CreateLotProductDialogComponent} from "../create-lot-product-dialog/create-lot-product-dialog.component";
import {ViewProductsComponent} from "../view-products/view-products.component";
import {UpDateLotProductComponent} from "../upate-lot-product/up-date-lot-product.component";

@Component({
  selector: 'app-lot-product-layout',
  templateUrl: './lot-product-layout.component.html',
  styleUrls: ['./lot-product-layout.component.scss']
})
export class LotProductLayoutComponent {
  dataSource = new MatTableDataSource<LotProductDto>();
  displayedColumns: string[] = ['Id', 'PriceOpen', 'PriceOfferMax', 'TimeStart', 'TimeEnd', 'Products', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  timeStart = new Date();
  timeEnd = new Date();

  constructor(
    private lotProductService: LotProductService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllLotProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  openCreateLotProductDialog() {
    this.dialog.open(CreateLotProductDialogComponent).afterClosed().subscribe({
      next: res => {
        if (res) {
          this.getAllLotProducts();
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUpdateLotProductDialog(lotProduct: LotProductDto) {
    this.dialog.open(UpDateLotProductComponent, {data: lotProduct}).afterClosed().subscribe(res => {
      if (res) {
        this.getAllLotProducts();
      }
    })
  }

  deleteLotProduct(lotProduct: LotProductDto) {
    const result = confirm('Are you sure you want to delete');
    if (result) {
      this.lotProductService.deleteLotProduct(lotProduct.lotProductId).subscribe(res => {
        if (res) {
          this.getAllLotProducts();
        }
      })
    }
  }

  openViewProducts(lotProduct: LotProductDto) {
    this.dialog.open(ViewProductsComponent, {data: lotProduct}).afterClosed().subscribe();
  }

  private getAllLotProducts() {
    this.lotProductService.getAllLotProducts().subscribe({
      next: res => {
        if (res) {
          this.dataSource.data = res;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }
}
