import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _storage: Storage;

  constructor(private _router: Router) {
    this._storage = window.localStorage;
  }

  set(key: string, value: string) {
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
