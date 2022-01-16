import { CommentService } from './comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comments } from './comment';
import { Data } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comments!: Comments;

  date!: Data;
  text!: string;

  constructor() {}

  ngOnInit(): void {}
}
