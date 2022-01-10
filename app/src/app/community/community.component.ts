import { HeaderService } from './../components/header/header.service';
import { BadgeService } from './../components/badge/badge.service';
import { LikeService } from './like.service';
import { Like } from './like';
import { Code } from './../editor/editor';
import { CommunityService } from './community.service';
import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { Codes } from '../editor/editor';
import { EditorService } from '../editor/editor.service';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  codes$ = this._communityService.read();
  faComment = faComment;
  faHeart = faHeart;
  codes!: Codes;
  code!: Code;
  active = false;
  quantVezesAlterado: number = 0;

  constructor(
    private _communityService: CommunityService,
    private _likeService: LikeService,
    private _badgeService: BadgeService,
    private _headerService: HeaderService
  ) {}

  ngOnInit(): void {
    hljs.highlightAll();
  }
}
