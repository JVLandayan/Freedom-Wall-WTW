import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { comment } from 'src/app/shared/models/comments.model';
import { ReadPost } from 'src/app/shared/models/posts.model';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private commentService: CommentsService
  ) {}
  postList: ReadPost[] = [];

  ngOnInit(): void {
    this.postService.getPostsWithComments().subscribe((data) => {
      this.postList = data;
    });
  }

  handleAddComment() {
    this.ngOnInit();
  }
}
