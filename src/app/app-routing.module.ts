import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootRoutingModule } from './pages/root.routing';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RootRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
