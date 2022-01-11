import { CommentModule } from './../components/comment/comment.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeModule } from './../components/code/code.module';
import { AvatarModule } from './../components/avatar/avatar.module';
import { BadgeModule } from './../components/badge/badge.module';
import { MenuModule } from './../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FontAwesomeModule,
    BadgeModule,
    AvatarModule,
    CodeModule,
    CommentModule
  ],
  exports: [MenuModule, FontAwesomeModule, BadgeModule, AvatarModule, CodeModule],
})
export class SharedModule {}
