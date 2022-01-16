import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { EditorComponent } from './editor/editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor',
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'community',
    component: CommunityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
