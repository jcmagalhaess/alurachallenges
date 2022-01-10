import { Component, Input, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  hljs = hljs.listLanguages();

  @Input() color!: string;
  @Input() syntax!: string;
  @Input() code!: string;
  @Input() editable!: boolean;

  constructor() {}

  ngOnInit(): void {}

  changeSyntaxCode() {
    const syntaxBlock = document.querySelector('.js-editor') as HTMLElement;
    const codigo = syntaxBlock!.innerText;

    syntaxBlock!.innerHTML = `<code class="hljs ${this.syntax}" contenteditable="true" aria-label="Editor de código"></code>`;
    syntaxBlock!.querySelector('code')!.textContent = codigo;
    hljs.highlightElement(syntaxBlock!.querySelector('code') as HTMLElement);
  }

  armazenarCodigo() {
    const syntaxBlock = document.querySelector('.js-editor') as HTMLElement;
    const codigo = syntaxBlock!.innerText;

    syntaxBlock.innerHTML = `<code class="hljs ${this.syntax}" contenteditable="true" aria-label="Editor de código"></code>`;
    syntaxBlock!.querySelector("code")!.textContent = codigo;
    return codigo;
  }
}
