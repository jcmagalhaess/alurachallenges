import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  formHighlight!: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formHighlight = this._formBuilder.group({
      inputColor: ['']
    })
  }

  changeColorMold() {
    const inputColor = this.formHighlight.get('inputColor')?.value;
    const moldColor = document.querySelector(".js-mold");
    const color = "--bg-color: " + inputColor;

    moldColor!.setAttribute("style", color);
  }

}
