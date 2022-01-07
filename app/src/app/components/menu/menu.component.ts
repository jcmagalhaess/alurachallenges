import { Component, Input, OnInit } from '@angular/core';
import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./breakpoint.scss', './menu.component.scss'],
})
export class MenuComponent implements OnInit {
  code = faCode;
  users = faUsers;

  @Input() mobile = '';

  constructor() {
  }

  ngOnInit(): void {}

  menuMobile() {
    console.log(this.mobile)
  }
}
