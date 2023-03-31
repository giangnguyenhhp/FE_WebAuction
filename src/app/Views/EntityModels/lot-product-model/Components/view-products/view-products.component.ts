import {Component, Inject} from '@angular/core';
import {ProductDto} from "../../../product-model/Models/ProductDto";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent {
  products: ProductDto[] = [];
  priceMax : number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
  }

  ngOnInit() {
    this.InitData();
  }

  private InitData() {
    this.products = this.data.products;
  }
}
