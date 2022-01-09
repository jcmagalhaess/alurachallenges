import { environment } from './../../environments/environment';
import { Code, Codes } from './editor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor(private _http: HttpClient) {}

  create(code: Code): Observable<Code> {
    return this._http.post<Code>(`${API}/codes/`, code);
  }

  read(): Observable<Codes> {
    return this._http.get<Codes>(`${API}/codes`)
  }
}
