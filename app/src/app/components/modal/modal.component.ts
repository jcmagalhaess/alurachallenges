import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Code } from 'src/app/code/code';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
  faComment = faComment
  faHeart = faHeart

  abrirModal = true;
  feed!: Code

  comment!: string

  @ViewChild('inputComment') inputComment!: ElementRef
  @ViewChild('comments') comments!: ElementRef

  constructor() {}

  toggle() {
    this.abrirModal = !this.abrirModal;
  }

  comentar() {
    this.comments.nativeElement.addComment(1, "julio")
  }
}
