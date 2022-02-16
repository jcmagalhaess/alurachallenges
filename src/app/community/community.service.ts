import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../code/code';
import { FormControl } from '@angular/forms';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  postInput = new FormControl();

  constructor(private _http: HttpClient) {}

  update(id: any, product: Code): Observable<Code> {
    return this._http.put<Code>(`${API}/codes/${id}`, product);
  }
}
