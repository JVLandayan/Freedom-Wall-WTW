import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';
import { ReadUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  entityApiUrl = environment.apiUrl + `${EntityList.USERS}/`;

  getUsers(): Observable<ReadUser[]> {
    return this.http.get<ReadUser[]>(this.entityApiUrl);
  }

  getUserById(id: number): Observable<ReadUser> {
    return this.http.get<ReadUser>(this.entityApiUrl + id);
  }
}
