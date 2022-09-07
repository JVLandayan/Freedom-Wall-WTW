import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<void>();

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
}
