import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

import { CommentService } from 'src/app/shared/comment/services/comment.service';

import { Code } from 'src/app/shared/code/models/code';
import { Comment } from 'src/app/shared/comment/models/comment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  faComment = faComment;
  faHeart = faHeart;
  abrirModal = true;
  feed!: Code;
  comment!: string;

  @ViewChild('inputComment') inputComment!: ElementRef;

  constructor(private _commentService: CommentService) {}

  ngOnInit(): void {}

  toggle() {
    this.abrirModal = !this.abrirModal;
  }

  armazenarComentario(comentario: string) {
    const data: Comment = {
      date: new Date(),
      text: comentario,
    };

    this.feed.comments.push({ date: data.date, text: data.text });
    this._commentService
      .saveComment(this.feed.comments, this.feed.id as number)
      .subscribe();
    this.inputComment.nativeElement.value = '';
  }
}
