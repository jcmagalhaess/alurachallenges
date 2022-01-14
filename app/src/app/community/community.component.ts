import { CodeService } from './../code/code.service';
import { Codes } from './../code/code';
import { CommunityService } from './community.service';
import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { tap, debounceTime, filter, distinctUntilChanged, switchMap, merge, flatMap, toArray } from 'rxjs';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  codes$ = this._codesService.read()

  faComment = faComment;
  faHeart = faHeart;

  constructor(
    private _codesService: CodeService,
  ) {}

  ngOnInit(): void {
    hljs.highlightAll();
  }
}
