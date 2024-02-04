import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootRoutingModule } from './pages/root.routing';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // path: /dashboard RootRouting
  // path: /auth AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RootRoutingModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
