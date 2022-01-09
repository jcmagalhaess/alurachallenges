import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  formHighlight!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _el: ElementRef) {}

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      inputColor: ['', Validators.required],
      syntaxHljs: ['', Validators.required],
    });
  }
}
