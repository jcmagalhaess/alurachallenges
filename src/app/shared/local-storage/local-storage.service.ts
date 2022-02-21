import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Codes } from '../code/models/code';

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _storage: Storage;
  private _state = new BehaviorSubject<Codes>([]);

  constructor() {
    this._storage = window.localStorage;
  }

  set(key: string, value: string): void {
    this._storage.setItem(key, value);
  }

  get(key: string): any {
    return this._storage.getItem(key);
  }

  remove(key: string): void {
    this._storage.removeItem(key)
  }

  clear(): void {
    this._storage.clear();
  }
}
