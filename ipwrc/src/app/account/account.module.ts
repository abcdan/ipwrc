import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuard } from '../guards/logged-in.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard],
  },
  {
    path: '', component: DashboardComponent, canActivate: [LoggedInGuard]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
