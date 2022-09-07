import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';
import { user } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private userSubject!: BehaviorSubject<any>;
  public user!: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<user>(
      JSON.parse(localStorage.getItem('user') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  entityApiUrl = environment.apiUrl + `/${EntityList.AUTHORIZATION}/`;

  login(): void {
    var userObject = { id: 1, anonName: 'helloworld-anon' };
    localStorage.setItem('user', JSON.stringify(userObject));
    this.userSubject.next(userObject);
  }

  register(): Observable<any> {
    return this.http.get<any>(this.entityApiUrl);
  }

  public get userValue(): user {
    return this.userSubject.value;
  }
}
