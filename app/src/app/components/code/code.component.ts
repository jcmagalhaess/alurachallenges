import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  hljs = hljs.listLanguages();

  @ViewChild('editor') editor!: ElementRef;

  @Input() color!: string;
  @Input() syntax!: string;
  @Input() code!: string;
  @Input() editable!: boolean;
  @Input() limitHight!: boolean;
  @Input() tag = true;

  constructor() {}

  ngOnInit(): void {}

  changeSyntaxCode() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    syntaxBlock!.innerHTML = `<code class="hljs ${this.syntax}" contenteditable="true" aria-label="Editor de código"></code>`;
    const code = syntaxBlock!.querySelector('code');
    code!.textContent = codigo;
    hljs.highlightElement(code as HTMLElement);
    console.log(code?.innerHTML);
  }

  armazenarCodigo() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    const code = syntaxBlock!.querySelector('code');
    code!.textContent = codigo;
    hljs.highlightElement(code as HTMLElement);
    return code?.innerHTML as string;
  }
}
