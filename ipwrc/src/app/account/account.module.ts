import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuard } from '../guards/logged-in.guard';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard],
  },
  {
    path: 'orders', component: OrdersComponent, canActivate: [LoggedInGuard],
  },
  {
    path: 'make-order', component: MakeOrderComponent, canActivate: [LoggedInGuard],
  },
  {
    path: '', component: DashboardComponent, canActivate: [LoggedInGuard]
  }
]

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, MakeOrderComponent, OrderItemComponent, OrderSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
