import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostDto} from "../Models/PostDto";
import {environment} from "../../../../../environments/environment";
import {CreatePostRequest} from "../Models/CreatePostRequest";
import {UpdatePostRequest} from "../Models/UpdatePostRequest";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http : HttpClient
  ) { }

  getAllPosts() {
    return this.http.get<PostDto[]>(`${environment.domain}/api/post`)
  }

  createPost(request: CreatePostRequest) {
    return this.http.post<PostDto>(`${environment.domain}/api/post`,request)
  }

  getPostById(postId: string | null) {
    return this.http.get<PostDto>(`${environment.domain}/api/post/${postId}`)
  }

  updatePost(request: UpdatePostRequest) {
    return this.http.put<PostDto>(`${environment.domain}/api/post/update/${request.postId}`,request)
  }

  deletePost(postId: string) {
    return this.http.delete(`${environment.domain}/api/post/delete/${postId}`)
  }
}
