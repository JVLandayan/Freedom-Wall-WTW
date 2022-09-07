import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    if (this.authService.userValue.id) {
      this.isLoggedIn = true;
    }
  }

  login(): void {
    this.authService.login();
    alert('User logged in');
    this.isLoggedIn = true;
    this.router.navigate(['']);
  }

  logout(): void {
    localStorage.removeItem('user');
    alert('User Logged Out');
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
