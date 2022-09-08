import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';
import { comment } from '../models/comments.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  entityApiUrl = environment.apiUrl + `${EntityList.COMMENTS}`;

  constructor(private httpClient: HttpClient) {}

  getAllComments(): Observable<comment[]> {
    return this.httpClient.get<comment[]>(this.entityApiUrl);
  }

  postComment(payload: any): Observable<any> {
    return this.httpClient.post(this.entityApiUrl, payload);
  }
}
