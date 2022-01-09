import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Code } from './editor';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  formHighlight!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _editorService: EditorService, private _router: Router) {}

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      inputColor: ['', Validators.required],
      syntaxHljs: ['', Validators.required],
    });
  }

  cadastrar(codigo: string) {
    const data: Code = {
      title: this.formHighlight.get('title')?.value,
      description: this.formHighlight.get('description')?.value,
      color: this.formHighlight.get('inputColor')?.value,
      syntax: this.formHighlight.get('syntaxHljs')?.value,
      code: codigo
    }

    this._editorService.create(data).subscribe(
      () => {
        console.log(data);
        this._router.navigate(['community']);
      },
      (error) => console.log(error)
    );
  }
}
