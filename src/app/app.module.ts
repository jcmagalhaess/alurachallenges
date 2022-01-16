import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './components/modal/modal.module';
import { CommunityComponent } from './community/community.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, EditorComponent, CommunityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
