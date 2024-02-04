import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RootComponent, DashboardComponent, AboutComponent],
  exports: [RootComponent, DashboardComponent, AboutComponent],
  imports: [CommonModule, RouterModule],
})
export class RootModule {}
