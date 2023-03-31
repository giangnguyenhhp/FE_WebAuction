import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CommentDto} from "../../Models/CommentDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CommentService} from "../../Services/comment.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PostNewCommentComponent} from "../post-new-comment/post-new-comment.component";

@Component({
  selector: 'app-comment-layout',
  templateUrl: './comment-layout.component.html',
  styleUrls: ['./comment-layout.component.scss']
})
export class CommentLayoutComponent {
  dataSource = new MatTableDataSource<CommentDto>();
  displayedColumns: string[] = ['Id', 'Content', 'User', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private commentService: CommentService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllComments();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }


  openCreateCommentDialog() {
    this.dialog.open(PostNewCommentComponent).afterClosed().subscribe({
      next: _ => {
        this.getAllComments();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteComment(comment: CommentDto) {
    const result = confirm("Are you sure you want to delete this comment");
    if (result) {
      this.commentService.deleteComment(comment.commentId).subscribe(() => {
        this.getAllComments()
      })
    }
  }

  private getAllComments() {
    this.commentService.getAllComments().subscribe({
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
}
