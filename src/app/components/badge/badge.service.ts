import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  countLike!: number

  constructor() { }

  count(count: number) {
    this.countLike = count
  }
}
