import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReadPost, AddOrUpdatePost } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
})
export class PostUpdateComponent implements OnInit {
  @Input() postData: ReadPost;
  constructor(private postService: PostsService) {}
  updateForm: FormGroup;
  @Output() postUpdated = new EventEmitter<void>();
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.updateForm = new FormGroup({
      title: new FormControl(this.postData.title, [Validators.required]),
      content: new FormControl(this.postData.content, [Validators.required]),
    });
  }

  submit() {
    const formPayload: AddOrUpdatePost = {
      title: this.updateForm.get('title')?.value,
      content: this.updateForm.get('content')?.value,
      userId: this.postData.user.id,
    };

    this.postService
      .updatePost(this.postData.id, formPayload)
      .subscribe((data) => {
        this.postUpdated.emit();
      });
  }
}
