import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { comment } from 'src/app/shared/models/comments.model';
import { ReadPost } from 'src/app/shared/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() postData: ReadPost;
  isEdit: boolean;
  @Input() componentCalled: string;
  @Input() commentsData: comment[];
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<void>();
  @Output() addCommentEvent = new EventEmitter<void>();
  showComments: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  editPost(): void {
    this.isEdit = !this.isEdit;
  }
  deletePost(): void {
    var confirmDelete = confirm('Are you sure?');

    if (confirmDelete) {
      this.deleteEvent.emit(this.postData.id);
    }
  }
  onUpdate() {
    this.updateEvent.emit();
  }
  handleSendComment() {
    this.addCommentEvent.emit();
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }
}
