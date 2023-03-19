import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductDto} from "../Models/ProductDto";
import {environment} from "../../../../../environments/environment";
import {CreateProductRequestDto} from "../Models/CreateProductRequestDto";
import {UpdateProductRequestDto} from "../Models/UpdateProductRequestDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<ProductDto[]>(`${environment.domain}/api/product`)
  }

  createProduct(request: CreateProductRequestDto) {
    return this.http.post<ProductDto>(`${environment.domain}/api/product`,request)
  }

  updateProduct(request: UpdateProductRequestDto) {
    return this.http.put<ProductDto>(`${environment.domain}/api/product/update/${request.productId}`,request)
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${environment.domain}/api/product/delete/${productId}`)
  }
}
