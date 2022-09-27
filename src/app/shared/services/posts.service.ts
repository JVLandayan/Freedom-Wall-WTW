import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';
import { AddOrUpdatePost, ReadPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  entityApiUrl = environment.apiUrl + EntityList.POSTS;

  getPosts(): Observable<ReadPost[]> {
    console.log(this.entityApiUrl);
    return this.http.get<ReadPost[]>(this.entityApiUrl);
  }

  getPostsWithComments(): Observable<ReadPost[]> {
    return this.http.get<ReadPost[]>(this.entityApiUrl + '');
  }

  getPostsByUserId(id: number): Observable<ReadPost[]> {
    return this.http.get<ReadPost[]>(this.entityApiUrl + `/user/${id}`);
  }

  getPostById(id: number): Observable<ReadPost> {
    return this.http.get<ReadPost>(this.entityApiUrl + `/${id}`);
  }

  createPost(payload: AddOrUpdatePost): Observable<any> {
    return this.http.post<any>(this.entityApiUrl, payload);
  }

  updatePost(id: number, payload: AddOrUpdatePost): Observable<any> {
    return this.http.put<any>(this.entityApiUrl + '/' + id, payload);
  }

  deletePostById(id: number): Observable<any> {
    return this.http.delete<any>(this.entityApiUrl + '/' + id);
  }
}
