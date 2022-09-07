import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReadPost, UpdatePost } from 'src/app/shared/models/posts.model';
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
    const formPayload: UpdatePost = {
      id: this.postData.id,
      title: this.updateForm.get('title')?.value,
      content: this.updateForm.get('content')?.value,
      anonName: this.postData.anonName,
      userId: this.postData.userId,
      dateCreated: this.postData.dateCreated,
    };

    this.postService
      .updatePost(this.postData.id, formPayload)
      .subscribe((data) => {
        this.postUpdated.emit();
      });
  }
}
