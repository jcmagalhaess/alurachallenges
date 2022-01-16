import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './../menu/menu.module';
import { AvatarModule } from './../avatar/avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AvatarModule, FontAwesomeModule, MenuModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
