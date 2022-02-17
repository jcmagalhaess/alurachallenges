import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { Code } from 'src/app/shared/code/models/code';

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
