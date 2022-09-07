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

  constructor(private http: HttpClient, private router: Router) {}

  entityApiUrl = environment.apiUrl + `/${EntityList.AUTHORIZATION}/`;

  login(): Observable<any> {
    return this.http.get<user>(this.entityApiUrl);
  }

  register(): Observable<any> {
    return this.http.get<any>(this.entityApiUrl);
  }
}
