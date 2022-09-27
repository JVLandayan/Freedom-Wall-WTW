import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReadComment } from 'src/app/shared/models/comment.model';
import { ReadPost } from 'src/app/shared/models/post.model';
import { AuthenticationService } from 'src/app/shared/services/Authentication.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() postData: ReadPost;
  isEdit: boolean;
  @Input() componentCalled: string;
  @Input() commentsData: ReadComment[];
  @Input() parentCallerName: string;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<void>();
  @Output() addCommentEvent = new EventEmitter<void>();
  isLiked: boolean;
  showComments: boolean = false;
  constructor(private authService: AuthenticationService) {}

  user = this.authService.userValue;

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
