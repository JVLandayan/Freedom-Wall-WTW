import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';
import { Login, Session } from '../models/auth.model';
import { ReadUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject!: BehaviorSubject<any>;
  public user!: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<Session>(
      JSON.parse(localStorage.getItem('user') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  entityApiUrl = environment.apiUrl + `${EntityList.AUTHENTICATION}/`;

  login(payload: Login) {
    var userObject = environment.userData;
    localStorage.setItem('user', JSON.stringify(userObject));
    this.userSubject.next(userObject);

    return this.http.post<Session>(this.entityApiUrl + '/login', payload).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  logout() {
    localStorage.clear();
  }

  public get userValue(): Session {
    return this.userSubject.value;
  }
}
