import { Codes } from './../../../shared/code/models/code';
import { Subject } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CodeComponent } from "src/app/shared/code/components/code.component";
import { Code } from "src/app/shared/code/models/code";
import { EditorService } from "../services/editor.service";
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';

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
  public posts!: Codes

  public syntaxFormat$ = new Subject<string>();
  public colorFormat$ = new Subject<string>();

  @ViewChild("editor") editor!: ElementRef;
  @ViewChild(CodeComponent) code!: CodeComponent;

  constructor(
    private _formBuilder: FormBuilder,
    private readonly _storage: LocalStorageService,
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
      syntax: this.formHighlight.get("syntax")?.value,
      color: this.formHighlight.get("color")?.value,
      code: this.code.generateCode.innerHTML,
      countLike: 0,
      statusLike: false,
      countComment: 0,
      comments: [],
    };

    let posts = JSON.parse(this._storage.get('code'));

    console.log(posts)

    if(!posts) posts = []
    posts.push(data)

    this._storage.set('code', JSON.stringify(posts))
    this._router.navigate(['community']);
  }

  alterarSyntax(event: any) {
    this.syntax = event.target.value;
  }

  changeColor(event: any) {
    this.colorFormat$.next(event.target.value);
  }

  generateSyntax() {
    this.syntaxFormat$.next(this.syntax);
  }
}
