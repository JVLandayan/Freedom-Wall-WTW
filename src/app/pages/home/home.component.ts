import { Component, OnInit } from '@angular/core';
import { ReadPost } from 'src/app/shared/models/posts.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostsService) {}
  postList: ReadPost[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.postList = data;
    });
  }
}
