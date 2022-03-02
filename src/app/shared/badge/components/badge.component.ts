import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodeService } from '../../code/services/code.service';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() icon!: any;
  @Input() count = 0;
  @Input() status = false;

  constructor() {}

  ngOnInit(): void {}
}
