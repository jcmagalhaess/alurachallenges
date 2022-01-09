import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  formHighlight!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      inputColor: ['', Validators.required],
      syntaxHljs: ['', Validators.required],
    });

    hljs.highlightAll()
  }

  changeColorMold() {
    const inputColor = this.formHighlight.get('inputColor')?.value;
    const moldColor = document.querySelector('.js-mold');
    const color = '--bg-color: ' + inputColor;

    moldColor!.setAttribute('style', color);
  }

  changeSyntaxCode() {
    const syntax = this.formHighlight.get('syntaxHljs')?.value;
    const syntaxBlock = document.querySelector('.js-editor') as HTMLElement;
    const codigo = syntaxBlock!.innerText;

    syntaxBlock!.innerHTML = `<code class="hljs ${syntax}" contenteditable="true" aria-label="Editor de código"></code>`;
    syntaxBlock!.querySelector("code")!.textContent = codigo;
    hljs.highlightElement(syntaxBlock!.querySelector("code") as HTMLElement);
  }
}
