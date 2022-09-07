import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    var userObject = { userId: 1, anonName: 'helloworld-anon' };
    localStorage.setItem('user', JSON.stringify(userObject));
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
