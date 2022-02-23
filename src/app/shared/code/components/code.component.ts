import { Codes } from './../models/code';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Directive,
  HostListener,
} from "@angular/core";
import hljs from "highlight.js/lib/common";
import { Subject } from "rxjs";
import { Code } from "../models/code";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"],
})
export class CodeComponent implements OnInit {
  public hljs = hljs.listLanguages();
  public syntax!: string;
  public color!: string;
  public generateCode!: Element;
  public code!: string;

  @ViewChild("editor") editor!: ElementRef;

  @Input() codeEditor!: Code;
  @Input() editable!: boolean;
  @Input() limitHight!: boolean;
  @Input() tag = true;

  @Input() syntaxFormat$!: Subject<string>;
  @Input() colorFormat$!: Subject<string>;
  @Input() listUpdate!: Code;

  @Output() codeChanged = new EventEmitter<Element>();

  constructor() {}

  ngOnInit(): void {
    if (this.syntaxFormat$)
      this.syntaxFormat$.subscribe((data) => {
        if (data != undefined)
          this.syntax = "language-".concat(data);
        this.changeSyntaxCode();
      });
    if (this.colorFormat$)
      this.colorFormat$.subscribe((data) => {
        this.color = data;
      });

    if (this.listUpdate) {
      this.syntax = this.listUpdate.syntax;
      this.color = this.listUpdate.color;
      this.code = this.listUpdate.code;
    }
  }

  public changeSyntaxCode() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    this.generateCode = syntaxBlock!.querySelector("code");
    this.generateCode!.textContent = codigo;
    hljs.highlightElement(this.generateCode as HTMLElement);

    this.codeChanged.emit(this.generateCode)
  }

  public getLanguages() {
    return this.hljs;
  }
}
