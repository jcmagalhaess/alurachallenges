import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './components/code.component';



@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CodeComponent]
})
export class CodeModule { }
