import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/Authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() onStateChangeEvent = new EventEmitter<void>();

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.authService.userValue.userId) {
      this.isLoggedIn = true;
    }
  }

  login(): void {}

  logout(): void {
    localStorage.removeItem('user');
    this.onStateChangeEvent.emit();
    alert('User Logged Out');
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
