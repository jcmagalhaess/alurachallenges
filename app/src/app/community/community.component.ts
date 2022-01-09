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
  faComment = faComment;
  faHeart = faHeart;
  codes!: Codes;
  code!: Code;

  constructor(
    private _editorService: EditorService,
    private _communityService: CommunityService
  ) {
  }

  ngOnInit(): void {
    this.listarFeed();
    hljs.highlightAll();
  }

  listarFeed() {
    this._editorService.read().subscribe((codes: Codes) => {
      this.codes = codes;
    });
  }

  curtir(id: any) {
    document.querySelector('.c-badge')?.classList.add('.c-badge--active')
    if (event?.currentTarget) {
    } else {
      console.log('obrigado por curtir')
    }
  }
}
