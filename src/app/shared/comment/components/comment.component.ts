import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Comments } from '../models/comment';

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
