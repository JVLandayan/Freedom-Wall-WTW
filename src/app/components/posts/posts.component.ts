import { Component, Input, OnInit } from '@angular/core';
import { ReadPost } from 'src/app/shared/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() postData: ReadPost;

  constructor() {}

  ngOnInit(): void {}
}
