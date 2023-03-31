import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../../Services/post.service";
import {CreatePostRequest} from "../../Models/CreatePostRequest";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  createPostForm = new FormGroup({
    "title": new FormControl('',[Validators.required]),
    "description": new FormControl('',[Validators.required]),
    "content": new FormControl('',[Validators.required]),
  });

  constructor(
    private postService : PostService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  submit() {
    const request = <CreatePostRequest>this.createPostForm.value;
    this.postService.createPost(request).subscribe({
      next:res=>{
        if(res){
          this.router.navigate(['/admin/post']).then();
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.message);
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.createPostForm.get(controlName)?.invalid
      && this.createPostForm.get(controlName)?.touched
      && this.createPostForm.get(controlName)?.hasError(errorName)
  }
}
