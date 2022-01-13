import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Code, Codes } from './code';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  constructor(private _http: HttpClient) {}

  create(code: Code): Observable<Code> {
    return this._http.post<Code>(`${API}/codes/`, code);
  }

  read(): Observable<Codes> {
    return this._http.get<Codes>(`${API}/codes/`);
  }

  update(id: Code, code: Code): Observable<Code> {
    return this._http.put<Code>(`${API}/codes/${id}/`, code);
  }

  like(id: number, count: number, status: boolean) {
    return this._http.patch<Code>(`${API}/codes/${id}/`, { countLike: count, statusLike: status });
  }

  // comment(comment: ) {
  //   return this._http.patch<Code>(`${API}/codes/${id}`, {
  //     comment: { comment },
  //     statusLike: status,
  //   });
  // }
}
