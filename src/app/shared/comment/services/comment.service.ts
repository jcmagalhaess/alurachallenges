import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Comments } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private _http: HttpClient) {}

  saveComment(comments: Comments, codeId: number): Observable<Comments> {
    return this._http.patch<Comments>(`/api/codes/${codeId}`, {
      countComment: comments.length,
      comments: comments,
    });
  }
}
