import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Code } from 'src/app/shared/code/models/code';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor(private _http: HttpClient) {}

  create(code: Code): Observable<Code> {
    return this._http.post<Code>(`/api/codes/`, code);
  }
}
