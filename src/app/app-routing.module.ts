import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './features/community/components/community.component';
import { EditorComponent } from './features/editor/components/editor.component';

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
