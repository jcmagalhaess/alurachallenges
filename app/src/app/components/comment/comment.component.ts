import { CommentService } from './comment.service';
import { Component, Input } from '@angular/core';
import { Comments } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comments!: Comments;

  constructor() {}
}
