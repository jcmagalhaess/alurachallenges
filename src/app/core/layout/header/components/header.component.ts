import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommunityService } from 'src/app/features/community/services/community.service';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  postInput = new FormControl();
  menuIcon = faBars;
  searchIcon = faSearch;

  constructor(private _communityService: CommunityService) {
    this._communityService.postInput = this.postInput;
  }
}
