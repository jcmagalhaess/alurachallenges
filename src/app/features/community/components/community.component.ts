import { LocalStorageService } from './../../../shared/local-storage/local-storage.service';
import { ModalComponent } from './../../../shared/modal/components/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { faBorderAll, faComment, faHeart, faStream } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, filter, merge, switchMap, tap, Subject } from 'rxjs';
import { CodeService } from 'src/app/shared/code/services/code.service';
import { CommunityService } from '../services/community.service';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  public todosCodes$ = this._codesService.read();
  public filtroPeloInput$ = this._communityService.postInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this._codesService.read(valorDigitado))
  );

  public posts = JSON.parse(this._storage.get('code'))

  public codes$ = merge(this.todosCodes$, this.filtroPeloInput$)

  public syntaxFormat$ = new Subject<string>();
  public colorFormat$ = new Subject<string>();

  public faMasonry = faStream;
  public faRegular = faBorderAll
  public faComment = faComment;
  public faHeart = faHeart;

  public structure = false

  constructor(
    private _codesService: CodeService,
    private _communityService: CommunityService,
    private _storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    console.log(this.posts)
    this.colorFormat$.next('#fff')
  }

  public toggleStructre() {
    this.structure = !this.structure
  }
}
