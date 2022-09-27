import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadPost } from 'src/app/shared/models/post.model';
import { AuthenticationService } from 'src/app/shared/services/Authentication.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  postList: ReadPost[] = [];
  isEdit: boolean = false;
  componentName: string = 'my-posts';
  @Input() userId: number | null;
  @Input() parentCallerName: string;

  constructor(
    private postService: PostsService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.parentCallerName == 'profile' && this.userId != null) {
      this.postService.getPosts().subscribe((data) => {
        this.postList = data.filter((post) => post.user.id == this.userId);
      });
    } else {
      this.postService.getPosts().subscribe((data) => {
        const user = this.authService.userValue;
        this.postList = data.filter((post) => post.user.id == user.userId);
      });
    }
  }

  editPostToggle() {
    this.isEdit = !this.isEdit;
  }

  deletePost(id: number) {
    this.postService.deletePostById(id).subscribe((data) => {
      alert('Post Deleted');
      this.ngOnInit();
    });
  }
  updateView() {
    this.ngOnInit();
  }
}
