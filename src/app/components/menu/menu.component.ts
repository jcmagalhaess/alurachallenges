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
  mostrarMenu = false

  @Input() mobile = false;

  constructor() {
  }

  ngOnInit(): void {}

  menuMobile() {
    this.mostrarMenu = !this.mostrarMenu
  }
}
