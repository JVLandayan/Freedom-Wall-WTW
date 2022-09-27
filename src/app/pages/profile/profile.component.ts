import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadPost } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  postList: any;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}
  paramId: number | null;
  ngOnInit(): void {
    this.paramId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(this.paramId).subscribe((data) => {
      this.userData = data;
    });
  }
}
