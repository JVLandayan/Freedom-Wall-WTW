import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  entityApiUrl = environment.apiUrl + EntityList.POSTS + '/';

  getPosts(): Observable<any[]> {
    console.log(this.entityApiUrl);
    return this.http.get<any[]>(this.entityApiUrl);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(this.entityApiUrl + id);
  }

  createPost(payload: any): Observable<any> {
    return this.http.post<any>(this.entityApiUrl, payload);
  }

  updatePost(payload: any): Observable<any> {
    return this.http.put<any>(this.entityApiUrl + payload.id, payload);
  }

  deletePostById(id: number): Observable<any> {
    return this.http.delete<any>(this.entityApiUrl + id);
  }
}
