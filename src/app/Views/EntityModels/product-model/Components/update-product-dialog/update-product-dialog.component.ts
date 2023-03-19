import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../Service/product.service";
import {UpdateProductRequestDto} from "../../Models/UpdateProductRequestDto";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrls: ['./update-product-dialog.component.scss']
})
export class UpdateProductDialogComponent {
  updateProductFormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    priceOpen: new FormControl(),
    description: new FormControl('', [Validators.required]),
    isApproved: new FormControl(),
    productId: new FormControl(),
  });

  constructor(
    private dialogRef: MatDialogRef<UpdateProductDialogComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.setValidators();
    this.ngInitData();
  }

  setValidators() {
    this.updateProductFormGroup.get('priceOpen')?.setValidators([Validators.required]);
    this.updateProductFormGroup.get('isApproved')?.setValidators([Validators.required]);
  }

  private ngInitData() {
    this.updateProductFormGroup.patchValue(this.data)
    console.log(this.data)
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
}
