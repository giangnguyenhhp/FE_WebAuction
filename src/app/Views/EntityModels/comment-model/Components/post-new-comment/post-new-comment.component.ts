import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostNewComment} from "../../Models/PostNewComment";
import {CommentService} from "../../Services/comment.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-post-new-comment',
  templateUrl: './post-new-comment.component.html',
  styleUrls: ['./post-new-comment.component.scss']
})
export class PostNewCommentComponent {
  postCommentForm = new FormGroup({
    content: new FormControl('',[Validators.required,Validators.minLength(10)])
  });

  constructor(
    private commentService: CommentService,
    private dialogRef: MatDialogRef<PostNewCommentComponent>
  ) {
  }

  submit() {
    const request = <PostNewComment>this.postCommentForm.value
    this.commentService.postComment(request).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.postCommentForm.get(controlName)?.invalid
      && this.postCommentForm.get(controlName)?.touched
      && this.postCommentForm.get(controlName)?.hasError(errorName)
  }
}
