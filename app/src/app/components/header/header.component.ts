import {
  debounceTime,
  tap,
  filter,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommunityService } from 'src/app/community/community.service';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./breakpoint.scss', './header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  postInput = new FormControl();
  menuIcon = faBars;
  searchIcon = faSearch;

  constructor(private _communityService: CommunityService) {
    this._communityService.postInput = this.postInput;
  }
}
