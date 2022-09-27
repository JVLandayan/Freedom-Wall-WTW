import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  checkSession(): void {
    if (eval(localStorage.getItem('user') ?? '') == '') {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }

  handleLogin() {
    location.reload();
  }
}
