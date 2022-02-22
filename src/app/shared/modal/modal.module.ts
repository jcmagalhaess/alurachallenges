import { CommentModule } from './../comment/comment.module';
import { BadgeModule } from './../badge/badge.module';
import { CodeModule } from './../code/code.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from "./components/modal.component";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CodeModule,
    BadgeModule,
    CommentModule,
    MatDialogModule
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
