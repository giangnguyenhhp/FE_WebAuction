import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductDto} from "../../../product-model/Models/ProductDto";
import {ProductService} from "../../../product-model/Service/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LotProductService} from "../../Services/lot-product.service";
import {CreateLotProductRequest} from "../../Models/CreateLotProductRequest";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-lot-product-dialog',
  templateUrl: './create-lot-product-dialog.component.html',
  styleUrls: ['./create-lot-product-dialog.component.scss']
})
export class CreateLotProductDialogComponent {
  createLotProductFormGroup = new FormGroup({
    timeStarted	: new FormControl(),
    timeEnded	: new FormControl(),
    productIds :  new FormControl(),
  });
  products: ProductDto[] = [];

  constructor(
    private productService: ProductService,
    private lotProductService:LotProductService,
    private dialogRef : MatDialogRef<CreateLotProductDialogComponent>
  ) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next:res=>{
        if(res){
          this.products = res
        }
      },
      error:(err:HttpErrorResponse) => {
        console.log(err.message)
      }
    })
    this.setValidators();
  }
  submit() {
    const request = <CreateLotProductRequest>this.createLotProductFormGroup.value
    this.lotProductService.createLotProduct(request).subscribe({
      next:_=>{
        this.dialogRef.close(true);
      },
      error: (err:HttpErrorResponse) =>{
        console.log(err.message);
      }
    })
  }

  private setValidators() {
    this.createLotProductFormGroup.controls.productIds.setValidators([Validators.required]);
    this.createLotProductFormGroup.controls.timeStarted.setValidators([Validators.required]);
    this.createLotProductFormGroup.controls.timeEnded.setValidators([Validators.required]);
  }

  validateControl(controlName: string, errorName: string) {
    return this.createLotProductFormGroup.get(controlName)?.invalid
      && this.createLotProductFormGroup.get(controlName)?.touched
      && this.createLotProductFormGroup.get(controlName)?.hasError(errorName)
  }
}
