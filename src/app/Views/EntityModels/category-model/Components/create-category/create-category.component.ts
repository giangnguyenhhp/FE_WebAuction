import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../Services/category.service";
import {CreateCategoryRequest} from "../../Models/CreateCategoryRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  createCategoryForm = new FormGroup({
    categoryName: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required)
  });

  constructor(
    private categoryService: CategoryService,
    private dialogRef : MatDialogRef<CreateCategoryComponent>
  ) {
  }

  ngOnInit() {}


  submit() {
    const request = <CreateCategoryRequest>this.createCategoryForm.value
    this.categoryService.createCategory(request).subscribe({
      next:(_)=>{
        this.dialogRef.close(true)
      },
      error:(err:HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }
}
