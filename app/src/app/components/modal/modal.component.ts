import { CommentService } from './../comment/comment.service';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Code } from 'src/app/code/code';
import { Comment } from '../comment/comment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  faComment = faComment;
  faHeart = faHeart;

  abrirModal = true;
  feed!: Code;

  comment!: string;

  countComments!: number;

  @ViewChild('inputComment') inputComment!: ElementRef;
  @ViewChild('comentar') comentar!: ElementRef;

  constructor(private _commentService: CommentService) {}

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
