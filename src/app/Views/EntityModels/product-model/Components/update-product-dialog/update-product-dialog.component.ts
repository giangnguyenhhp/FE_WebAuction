import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../Service/product.service";
import {UpdateProductRequestDto} from "../../Models/UpdateProductRequestDto";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryDto} from "../../../category-model/Models/CategoryDto";
import {CategoryService} from "../../../category-model/Services/category.service";

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrls: ['./update-product-dialog.component.scss']
})
export class UpdateProductDialogComponent {
  updateProductFormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    priceOpen: new FormControl(0,[Validators.required]),
    description: new FormControl('', [Validators.required]),
    isApproved: new FormControl(),
    productId: new FormControl(),
    categoryId: new FormControl('',[Validators.required]),
  });

  categories : CategoryDto[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateProductDialogComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.setValidators();
    this.ngInitData();
    this.getAllCategories();
  }

  setValidators() {
    this.updateProductFormGroup.get('isApproved')?.setValidators([Validators.required]);
  }

  private ngInitData() {
    this.updateProductFormGroup.patchValue(this.data)
    this.updateProductFormGroup.controls.categoryId.setValue(this.data.category?.categoryId)
  }

  submit() {
    const request = <UpdateProductRequestDto>this.updateProductFormGroup.value
    request.isApproved = this.updateProductFormGroup.controls.isApproved.value === 'true';

    this.productService.updateProduct(request).subscribe({
      next: (_) => {
        this.dialogRef.close(true);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }

  getChecked() {
    return this.updateProductFormGroup.get('isApproved')?.value;
  }

  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        if(res){
          this.categories = res;
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.message)
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.updateProductFormGroup.get(controlName)?.invalid
      && this.updateProductFormGroup.get(controlName)?.touched
      && this.updateProductFormGroup.get(controlName)?.hasError(errorName)
  }
}
