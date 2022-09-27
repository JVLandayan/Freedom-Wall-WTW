import { Component, Input, OnInit } from '@angular/core';
import { ReadComment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() commentData: ReadComment;
  constructor() {}

  ngOnInit(): void {}
}
