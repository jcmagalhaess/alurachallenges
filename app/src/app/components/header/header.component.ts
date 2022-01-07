import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./breakpoint.scss', './header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  menuIcon = faBars;
  searchIcon = faSearch;

  constructor(private _headerService: HeaderService) {}

  ngOnInit(): void {}
}
