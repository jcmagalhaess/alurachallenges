import { Comment, Comments } from './comment';
import { pluck, tap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private _http: HttpClient) {}

  saveComment(comments: Comments, codeId: number): Observable<Comments> {
    return this._http.patch<Comments>(`${API}/codes/${codeId}`, {
      countComment: comments.length,
      comments: comments,
    });
  }
}
