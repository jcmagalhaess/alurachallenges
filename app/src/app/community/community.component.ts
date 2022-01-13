import { CommunityService } from './community.service';
import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Code, Codes } from '../code/code';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  codes$ = this._communityService.read();
  faComment = faComment;
  faHeart = faHeart;

  constructor(
    private _communityService: CommunityService,
  ) {}

  ngOnInit(): void {
    hljs.highlightAll();
  }
}
