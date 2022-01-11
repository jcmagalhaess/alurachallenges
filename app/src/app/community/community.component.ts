import { Code } from './../editor/editor';
import { CommunityService } from './community.service';
import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { Codes } from '../editor/editor';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

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
  ) {}

  ngOnInit(): void {
    hljs.highlightAll();
  }
}
