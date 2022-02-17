import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule, MenuModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
