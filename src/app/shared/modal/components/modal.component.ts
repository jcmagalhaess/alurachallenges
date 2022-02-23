import { filter } from 'rxjs';
import { LocalStorageService } from './../../local-storage/local-storage.service';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Inject,
} from "@angular/core";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Code } from "src/app/shared/code/models/code";
import { Comment } from "src/app/shared/comment/models/comment";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  public formComments!: FormGroup;
  public faComment = faComment;
  public faHeart = faHeart;

  constructor(
    private _storage: LocalStorageService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Code,
  ) {}

  ngOnInit(): void {
    this.formComments = new FormGroup({
      comments: new FormControl()
    })
  }

  armazenarComentario() {
    let codes = JSON.parse(this._storage.get('code'));
    let codeFilter = codes.filter((_comment: Comment) => _comment.id == this.data.id)[0];
    
    let comments = [...codeFilter.comments];
    let nextId = 1;

    if (comments.length)
      nextId = comments.sort((a: Comment, b: Comment) => b.id - a.id)[0].id + 1

    const comment: Comment = {
      codeId: this.data.id,
      id: nextId,
      date: new Date().toISOString(),
      text: this.formComments.get('comments')?.value,
    };

    codeFilter.comments.push(comment);

    this.data = codeFilter;

    this._storage.set('code', JSON.stringify(codes));
    
    this.formComments.reset('')
  }
}
