import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  mostraMenu!: boolean
  filtroPeloInput!: Observable<any>
  constructor() { }
}
