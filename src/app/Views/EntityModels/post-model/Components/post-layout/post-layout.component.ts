import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PostDto} from "../../Models/PostDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PostService} from '../../Services/post.service';
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.scss']
})
export class PostLayoutComponent {
  dataSource = new MatTableDataSource<PostDto>();
  displayedColumns: string[] = ['Id', 'Title', 'Description', 'Details', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private postService: PostService,
  ) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }


  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: res => {
        if (res) {
          this.dataSource.data = res
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  deletePost(postId: string) {
      const result = confirm("Are you sure you want to delete this post?");
      if (result) {
        this.postService.deletePost(postId).subscribe({
          error:(err: any) =>{
            console.log(err);
          },
          complete:()=>{
            this.getAllPosts();
          }
        })
      }
  }
}
