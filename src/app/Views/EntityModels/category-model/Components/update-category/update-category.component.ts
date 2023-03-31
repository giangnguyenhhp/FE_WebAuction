import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CategoryService } from '../../Services/category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateCategoryRequest} from "../../Models/UpdateCategoryRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  updateCategoryForm = new FormGroup({
    categoryId: new FormControl(),
    categoryName: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });

  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<UpdateCategoryRequest>
  ) {
  }

  ngOnInit() {
    this.ngInitData()
  }

  submit() {
    const request = <UpdateCategoryRequest>this.updateCategoryForm.value
    this.categoryService.updateCategory(request).subscribe({
      next:_=>{
        this.dialogRef.close(true)
      },
      error:(err:HttpErrorResponse) =>{
        console.log(err.message)
      }
    })
  }

  private ngInitData() {
    this.updateCategoryForm.patchValue(this.data)
  }

  validateControl(controlName: string, errorName: string) {
    return this.updateCategoryForm.get(controlName)?.invalid
      && this.updateCategoryForm.get(controlName)?.touched
      && this.updateCategoryForm.get(controlName)?.hasError(errorName)
  }
}
