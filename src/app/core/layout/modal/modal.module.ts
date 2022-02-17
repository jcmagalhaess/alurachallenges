import { BadgeModule } from "../../../shared/badge/badge.module";
import { CommentModule } from "../comment/comment.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./components/modal.component";
import { CodeModule } from "../../../shared/code/code.module";

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommentModule,
    CodeModule,
    BadgeModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
