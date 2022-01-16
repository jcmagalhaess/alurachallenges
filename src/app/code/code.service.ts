import { environment } from './../../environments/environment.prod';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  read(valor?: string): Observable<Codes> {
    const params = valor ? new HttpParams().append('q', valor) : undefined;
    return this._http.get<Codes>(`${API}/codes/`, { params }).pipe(
      tap((valor) => console.log(valor))
    );
  }

  update(id: Code, code: Code): Observable<Code> {
    return this._http.put<Code>(`${API}/codes/${id}/`, code);
  }

  like(id: number, count: number, status: boolean) {
    return this._http.patch<Code>(`${API}/codes/${id}/`, { countLike: count, statusLike: status });
  }

  readById(id: number): Observable<Code> {
    return this._http.get<Code>(`${API}/codes/${id}`);
  }
}
