import { Component, Input, OnInit } from '@angular/core';
import { comment } from 'src/app/shared/models/comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() commentData: comment;
  constructor() {}

  ngOnInit(): void {}
}
