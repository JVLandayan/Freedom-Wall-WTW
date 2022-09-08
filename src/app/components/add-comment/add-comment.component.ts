import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { comment } from 'src/app/shared/models/comments.model';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
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
    private authService: AuthorizationService
  ) {}

  @Input() postId: number;
  @Output() sendCommentEvent = new EventEmitter<void>();
  commentContent: string;

  ngOnInit(): void {}

  sendComment() {
    var presentDate = new Date().toJSON();
    const commentPayload: comment = {
      id: this.helperService.uniqueIdGenerator(),
      comment: this.commentContent,
      dateCreated: presentDate,
      postId: this.postId,
      userId: this.authService.userValue.id,
    };

    this.commentService.postComment(commentPayload).subscribe((data) => {
      this.sendCommentEvent.emit();
    });
  }
}
