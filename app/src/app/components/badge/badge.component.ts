import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  commentIcon = faComment;
  likeIcon = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
