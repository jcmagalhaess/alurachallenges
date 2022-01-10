import { CommunityService } from './../../community/community.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, filter, merge, switchMap, tap } from 'rxjs';
import { HeaderService } from './header.service';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./breakpoint.scss', './header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  menuIcon = faBars;
  searchIcon = faSearch;

  constructor() {
  }
}
