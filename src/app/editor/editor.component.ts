import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Code } from "../code/code";
import { EditorService } from "./editor.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  public formHighlight!: FormGroup;
  public color!: string;
  public syntax!: string;

  @ViewChild("editor") editor!: ElementRef;

  constructor(
    private _formBuilder: FormBuilder,
    private _editorService: EditorService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      color: ["#6bd1ff", Validators.required],
      syntax: ["", Validators.required],
    });
  }

  cadastrar(codigo: string) {
    const data: Code = {
      title: this.formHighlight.get("title")?.value,
      description: this.formHighlight.get("description")?.value,
      syntax: this.formHighlight.get("syntaxHljs")?.value,
      color: this.formHighlight.get("inputColor")?.value,
      code: codigo,
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
    this.syntax = event.target.value;
  }

  changeColor(event: any) {
    this.color = event.target.value;
  }
}
