import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Like } from './like';
import { Injectable } from '@angular/core';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private _http: HttpClient) { }

  curtir(like: Like): Observable<Like>  {
    return this._http.post<Like>(`${API}/likes`, like)
  }
}
