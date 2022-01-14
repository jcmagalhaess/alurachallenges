import { CodeService } from './../../code/code.service';
import { BadgeService } from './badge.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() icon!: any;
  @Input() count!: any;
  @Input() status!: any;
  @Output() callParent = new EventEmitter<any>();

  constructor(private _codeService: CodeService) {}

  ngOnInit(): void {}

  curtir(id: any) {
    if (this.status == false) {
      this.status = !this.status;
      this.count!++;
      console.log(this.count, this.status)
    } else {
      this.status = !this.status;
      this.count!--;
      console.log(this.count, this.status)
    }
    this._codeService.like(id, this.count, this.status).subscribe()
  }
}
