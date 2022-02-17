import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Code } from '../../../../shared/code/models/code';
import { CommentService } from 'src/app/core/layout/comment/comment.service';
import { Comment } from 'src/app/core/layout/comment/comment';

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
