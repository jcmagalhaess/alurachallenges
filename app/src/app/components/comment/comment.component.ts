import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Comments } from './comment';

const API = environment.urlAPI

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  comments$!: Observable<Comments>;

  @Input() user!: any;
  @Input() comment!: string;

  constructor(private _http: HttpClient) {}

  addComment(codeId: number, comment: string) {
    this._http.patch(`${API}/codes/${codeId}`, comment).subscribe(
      (res) => {
        console.log('received ok response from patch request');
      },
      (error) => {
        console.error('There was an error during the request');
        console.log(error);
      }
    );

    console.log('request sent. Waiting for response...');
  }
}
