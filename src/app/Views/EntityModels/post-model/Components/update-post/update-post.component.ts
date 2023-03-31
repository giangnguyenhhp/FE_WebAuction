import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostDto} from "../../Models/PostDto";
import {PostService} from "../../Services/post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UpdatePostRequest} from "../../Models/UpdatePostRequest";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent {
  postId : string | null = '';
  post = <PostDto>{} ;
  updatePostForm= new FormGroup({
    "postId" : new FormControl(),
    "title": new FormControl('',[Validators.required]),
    "description": new FormControl('',[Validators.required]),
    "content": new FormControl('',[Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router : Router
  ) {
  }

  ngOnInit() {
    this.getPostById();
  }

  submit() {
    const request = <UpdatePostRequest>this.updatePostForm.value;
    this.postService.updatePost(request).subscribe({
      next:_=>{
        this.router.navigate(['/admin/post']).then();
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.updatePostForm.get(controlName)?.invalid
      && this.updatePostForm.get(controlName)?.touched
      && this.updatePostForm.get(controlName)?.hasError(errorName)
  }

  private getPostById() {
    this.postId = this.route.snapshot.queryParams['id'];
    this.postService.getPostById(this.postId).subscribe({
      next:res=>{
        this.post = res;
        this.updatePostForm.patchValue(this.post)
      },
      error:(err:HttpErrorResponse) =>{
        console.log(err.message);
      }
    });
  }
}
