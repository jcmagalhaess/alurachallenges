import { CommunityService } from 'src/app/community/community.service';
import { CodeService } from './../code/code.service';
import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { faBorderAll, faComment, faHeart, faStream } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, filter, merge, switchMap, tap } from 'rxjs';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  todosCodes$ = this._codesService.read().pipe(
    tap(() => {
      console.log('Fluxo incial');
    })
  );
  filtroPeloInput$ = this._communityService.postInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => {
      console.log('Fluxo do filtro');
    }),
    tap(console.log),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this._codesService.read(valorDigitado))
  );

  codes$ = merge(this.todosCodes$, this.filtroPeloInput$)

  faMasonry = faStream;
  faRegular = faBorderAll
  faComment = faComment;
  faHeart = faHeart;

  structure = false


  constructor(
    private _codesService: CodeService,
    private _communityService: CommunityService
  ) {}

  ngOnInit(): void {
    hljs.highlightAll();
  }

  toggleStructre() {
    this.structure = !this.structure
    console.log(this.structure)
  }
}
