import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../Service/product.service";
import {CreateProductRequestDto} from "../../Models/CreateProductRequestDto";
import {CategoryDto} from "../../../category-model/Models/CategoryDto";
import {CategoryService} from "../../../category-model/Services/category.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.scss']
})
export class CreateProductDialogComponent {
  createProductFormGroup = new FormGroup({
    productName: new FormControl('',[Validators.required]),
    priceOpen: new FormControl(),
    description: new FormControl('',[Validators.required]),
    isApproved: new FormControl(),
    categoryId : new FormControl(),
  });
  categories: CategoryDto[] = [];

  constructor(
    private dialogRef : MatDialogRef<CreateProductDialogComponent>,
    private productService : ProductService,
    private categoryService : CategoryService
  ) {
  }

  ngOnInit(){
    this.setValidators();
    this.getAllCategories();
  }

  setValidators(){
    this.createProductFormGroup.get('priceOpen')?.setValidators([Validators.required]);
    this.createProductFormGroup.get('isApproved')?.setValidators([Validators.required]);
  }

  submit() {
    const request = <CreateProductRequestDto>this.createProductFormGroup.value

    // Chuyển đổi kiểu dữ liệu từ string sang boolean
    request.isApproved = this.createProductFormGroup.controls['isApproved'].value === 'true';

    this.productService.createProduct(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }

  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        if(res){
          this.categories = res
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.message)
      }
    })
  }
}
