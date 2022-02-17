import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './components/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [BadgeComponent],
})
export class BadgeModule {}
