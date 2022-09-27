import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOrUpdatePost, ReadPost } from 'src/app/shared/models/post.model';
import { AuthenticationService } from 'src/app/shared/services/Authentication.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-create-a-post',
  templateUrl: './create-a-post.component.html',
  styleUrls: ['./create-a-post.component.css'],
})
export class CreateAPostComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  postForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    const payload: AddOrUpdatePost = {
      title: this.postForm.get('title')?.value,
      content: this.postForm.get('content')?.value,
      userId: this.authService.userValue.userId,
    };
    this.postService.createPost(payload).subscribe((data) => {
      alert('Post Created Successfully');
      this.postForm.reset();
      this.router.navigate(['']);
    });
  }
}
