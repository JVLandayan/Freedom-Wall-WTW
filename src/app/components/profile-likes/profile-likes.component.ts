import { Component, Input, OnInit } from '@angular/core';
import { ReadPost } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-profile-likes',
  templateUrl: './profile-likes.component.html',
  styleUrls: ['./profile-likes.component.css'],
})
export class ProfileLikesComponent implements OnInit {
  @Input() postList: any;
  @Input() userData: any;

  constructor() {}

  ngOnInit(): void {}
}
