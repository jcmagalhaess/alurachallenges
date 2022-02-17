import { Subject } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CodeComponent } from "src/app/shared/code/components/code.component";
import { Code } from "src/app/shared/code/models/code";
import { EditorService } from "../services/editor.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements AfterViewInit, OnInit {
  public formHighlight!: FormGroup;
  public color!: string;
  public syntax!: string;
  public languages!: Array<string>;
  public teste!: any;

  public formatar$ = new Subject<string>();

  @ViewChild("editor") editor!: ElementRef;
  @ViewChild(CodeComponent) code!: CodeComponent;

  constructor(
    private _formBuilder: FormBuilder,
    private _editorService: EditorService,
    private _router: Router,
    private _ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      color: ["#6bd1ff", Validators.required],
      syntax: ["", Validators.required],
    });
  }

  ngAfterViewInit() {
    this.languages = this.code.hljs;
    this._ref.detectChanges();
  }

  cadastrar() {
    const data: Code = {
      title: this.formHighlight.get("title")?.value,
      description: this.formHighlight.get("description")?.value,
      syntax: this.formHighlight.get("syntaxHljs")?.value,
      color: this.formHighlight.get("inputColor")?.value,
      code: this.code.armazenarCodigo(),
      countLike: 0,
      statusLike: false,
      countComment: 0,
      comments: [],
    };

    this._editorService.create(data).subscribe({
      next: () => {
        this._router.navigate(["community"]);
      },
      error: (error) => console.log(error),
    });
  }

  alterarSyntax(event: any) {
    // console.log(event);
    this.syntax = event.target.value;
  }

  changeColor(event: any) {
    // this.color = event.target.value;
    this.formatar$.next(event.target.value);
  }

  generateSyntax() {
    this.formatar$.next(this.syntax);
  }

  insertingColor() {
  }
}
