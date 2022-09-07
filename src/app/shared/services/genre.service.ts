import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EntityList } from '../enums/entities';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  entityApiUrl = environment.apiUrl+`/${EntityList.GENRE}/`

  getGenres():Observable<any> {
    return this.http.get<any>(this.entityApiUrl)
  }

  getGenreById(id:number) {
    return this.http.get<any>(this.entityApiUrl+id)
  }

  createGenre(payload:any):Observable<any> {
    return this.http.post<any>(this.entityApiUrl,payload)
  }


}
