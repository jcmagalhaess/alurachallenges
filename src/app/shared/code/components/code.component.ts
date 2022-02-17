import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import hljs from "highlight.js/lib/common";
import { Subject } from "rxjs";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"],
})
export class CodeComponent implements OnInit {
  public hljs = hljs.listLanguages();
  public syntax!: string;
  public color!: string;

  @ViewChild("editor") editor!: ElementRef;

  @Input() code!: string;
  @Input() editable!: boolean;
  @Input() limitHight!: boolean;
  @Input() tag = true;
  @Input() formatar!: Subject<string>;

  @Output() codeChanged = new EventEmitter<string>();

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.syntax)
    this.formatar.subscribe({
      next: data => {
        if (data.match('#')) {
          this.color = data;
        } else {
          this.syntax = 'language-'.concat(data)
          this.changeSyntaxCode();
        }
      }
    })
  }

  public changeSyntaxCode() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    // this.codeChanged.emit(codigo)
    const code = syntaxBlock!.querySelector("code");
    code!.textContent = codigo;
    hljs.highlightElement(code as HTMLElement);
    console.log(code)
  }

  public armazenarCodigo() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    const code = syntaxBlock!.querySelector("code");
    code!.textContent = codigo;
    hljs.highlightElement(code as HTMLElement);
    return code?.innerHTML as string;
  }

  public getLanguages() {
    return this.hljs
  }
}
