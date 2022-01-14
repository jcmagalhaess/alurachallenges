import { AvatarModule } from './../avatar/avatar.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, AvatarModule],
  exports: [MenuComponent],
})
export class MenuModule {}
