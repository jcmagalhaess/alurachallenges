import { Codes } from './../models/code';
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

  @ViewChild("editor") editor!: ElementRef;

  @Input() code!: Code;
  @Input() editable!: boolean;
  @Input() limitHight!: boolean;
  @Input() tag = true;

  @Input() syntaxFormat$!: Subject<string>;
  @Input() colorFormat$!: Subject<string>;
  @Input() listUpdate!: any;

  @Output() codeChanged = new EventEmitter<string>();

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

    console.log(this.listUpdate)
    this.color = this.listUpdate[0];
    this.syntax = this.listUpdate[1];
    this.code = this.listUpdate[2];
    
  }

  public changeSyntaxCode() {
    const syntaxBlock = this.editor?.nativeElement;
    const codigo = syntaxBlock!.innerText;

    this.generateCode = syntaxBlock!.querySelector("code");
    this.generateCode!.textContent = codigo;
    hljs.highlightElement(this.generateCode as HTMLElement);
  }

  public getLanguages() {
    return this.hljs;
  }
}
