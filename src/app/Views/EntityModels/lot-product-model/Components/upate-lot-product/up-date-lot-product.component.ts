import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductDto} from "../../../product-model/Models/ProductDto";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../product-model/Service/product.service";
import {LotProductService} from "../../Services/lot-product.service";
import {UpdateLotProductRequest} from "../../Models/UpdateLotProductRequest";

@Component({
  selector: 'app-upate-lot-product',
  templateUrl: './upate-lot-product.component.html',
  styleUrls: ['./upate-lot-product.component.scss']
})
export class UpDateLotProductComponent {
  updateLotProductFormGroup = new FormGroup({
    "lotProductId": new FormControl(),
    "timeStarted": new FormControl(),
    "timeEnded": new FormControl(),
    "productIds": new FormControl(),
  });
  listProducts: ProductDto[] =[];
  productIds : string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private productService : ProductService,
    private lotProductService : LotProductService,
    private dialogRef : MatDialogRef<any>
  ) {
  }

  ngOnInit(){
    this.InitData();
    this.productService.getAllProducts().subscribe(res=>{
      if(res){
        this.listProducts = res
      }
    });
    this.setValidators();
  }

  private InitData() {
    this.updateLotProductFormGroup.patchValue(this.data)
    for (let product of this.data.products) {
      this.productIds.push(product.productId)
    }
    console.log(this.productIds)
    this.updateLotProductFormGroup.controls.productIds.setValue(this.productIds)
  }

  submit() {
    const request = <UpdateLotProductRequest>this.updateLotProductFormGroup.value;
    this.lotProductService.updateLotProduct(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true);
      }
    })
  }

  private setValidators() {
    this.updateLotProductFormGroup.controls.productIds.setValidators([Validators.required]);
    this.updateLotProductFormGroup.controls.timeStarted.setValidators([Validators.required]);
    this.updateLotProductFormGroup.controls.timeEnded.setValidators([Validators.required]);
  }

  validateControl(controlName: string, errorName: string) {
    return this.updateLotProductFormGroup.get(controlName)?.invalid
      && this.updateLotProductFormGroup.get(controlName)?.touched
      && this.updateLotProductFormGroup.get(controlName)?.hasError(errorName)
  }
}
