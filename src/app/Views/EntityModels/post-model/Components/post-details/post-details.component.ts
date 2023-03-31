import {Component} from '@angular/core';
import {PostDto} from "../../Models/PostDto";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../Services/post.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  postId: string | null = '';
  post = <PostDto>{};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.getPostById();
  }


  private getPostById() {
    this.postId = this.route.snapshot.queryParams['id'];
    this.postService.getPostById(this.postId).subscribe({
      next: res => {
        this.post = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    });
  }
}
