import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePost, ReadPost } from 'src/app/shared/models/posts.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-create-a-post',
  templateUrl: './create-a-post.component.html',
  styleUrls: ['./create-a-post.component.css'],
})
export class CreateAPostComponent implements OnInit {
  constructor(private postService: PostsService, private router: Router) {}

  postForm: FormGroup;
  user = JSON.parse(localStorage.getItem('user') ?? '');

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
    var presentDate = new Date().toJSON();

    const payload: CreatePost = {
      id: this.uniqueIdGenerator(),
      title: this.postForm.get('title')?.value,
      content: this.postForm.get('content')?.value,
      dateCreated: presentDate,
      anonName: this.user.anonName,
      userId: this.user.userId,
    };
    this.postService.createPost(payload).subscribe((data) => {
      alert('Post Created Successfully');
      this.postForm.reset();
      this.router.navigate(['']);
    });
  }

  uniqueIdGenerator(): number {
    return Math.floor(Math.random() * Date.now());
  }
}
