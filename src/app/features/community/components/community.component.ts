import { ModalComponent } from './../../../shared/modal/components/modal.component';
import { LocalStorageService } from './../../../shared/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { faBorderAll, faComment, faHeart, faStream } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, filter, merge, switchMap, Subject } from 'rxjs';
import { CodeService } from 'src/app/shared/code/services/code.service';
import { CommunityService } from '../services/community.service';
import { MatDialog } from '@angular/material/dialog';

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
    private _storage: LocalStorageService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.colorFormat$.next('#fff')
  }

  public toggleStructre() {
    this.structure = !this.structure
  }

  public modalOpen() {
    // const dialogRef = this._dialog.open(ModalComponent, {
    //   minWidth: '800px',
    //   data: this.posts
    // });

    // dialogRef.afterClosed().subscribe( result => {
    //   console.log(`Dialog result: ${result}`)
    // } )
  }
}
