import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddComment, ReadComment } from 'src/app/shared/models/comment.model';
import { AuthenticationService } from 'src/app/shared/services/Authentication.service';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  constructor(
    private commentService: CommentsService,
    private helperService: HelperService,
    private authService: AuthenticationService
  ) {}

  @Input() postId: number;
  @Output() sendCommentEvent = new EventEmitter<void>();
  commentContent: string;

  ngOnInit(): void {}

  sendComment() {
    const commentPayload: AddComment = {
      body: this.commentContent,
      userId: this.authService.userValue.userId,
      postId: this.postId,
    };

    this.commentService.postComment(commentPayload).subscribe((data) => {
      this.sendCommentEvent.emit();
    });
  }
}
