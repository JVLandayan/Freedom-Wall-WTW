import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  entityApiUrl = environment.apiUrl + `/${EntityList.USERS}/`;

  getUsers(): Observable<any> {
    return this.http.get<any>(this.entityApiUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.entityApiUrl);
  }
}
