import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeModule } from './code/code.module';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { MenuModule } from '../core/layout/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FontAwesomeModule,
    BadgeModule,
    AvatarModule,
    CodeModule,
    MatFormFieldModule,
    ModalModule
  ],
  exports: [MenuModule, FontAwesomeModule, BadgeModule, AvatarModule, CodeModule, ModalModule],
})
export class SharedModule {}
