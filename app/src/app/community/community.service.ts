import { Like } from './like';
import { Code, Codes } from './../editor/editor';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable } from 'rxjs';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private _http: HttpClient) { }

  buscaPorId(id: number): Observable<Code> {
    return this._http.get<Code>(`${API}/codes/${id}`);
  }

  update(id: any, product: Code): Observable<Code>  {
    return this._http.put<Code>(`${API}/codes/${id}`, product)
  }

  read(): Observable<Codes> {
    return this._http.get<Codes>(`${API}/codes`)
  }
}
