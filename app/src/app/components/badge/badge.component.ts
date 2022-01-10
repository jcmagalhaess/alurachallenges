import { BadgeService } from './badge.service';
import { LikeService } from './../../community/like.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Like } from 'src/app/community/like';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  active = false;
  count = 0;

  @Input() icon!: any;
  @Output() callParent = new EventEmitter<any>();

  constructor(
    private _likeService: LikeService,
    private _badgeService: BadgeService
  ) {}

  ngOnInit(): void {}

  curtir() {
    if (this.active == false) {
      this.active = !this.active;
      this.count!++;
      this._badgeService.count(this.count);
    } else {
      this.active = !this.active;
      this.count!--;
      this._badgeService.count(this.count);
    }
  }
}
