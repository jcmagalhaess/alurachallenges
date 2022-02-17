import { AvatarModule } from '../../../shared/avatar/avatar.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, AvatarModule],
  exports: [MenuComponent],
})
export class MenuModule {}
