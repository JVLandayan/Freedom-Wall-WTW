import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReadPost } from 'src/app/shared/models/posts.model';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
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

  constructor(
    private postService: PostsService,
    private authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      const user = this.authService.userValue;
      this.postList = data.filter((post) => post.userId == user.id);
    });
  }

  editPost() {
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
