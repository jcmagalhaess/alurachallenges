import { Component, Input, OnInit } from '@angular/core';
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
