import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuard } from '../guards/logged-in.guard';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { UpgradeToAdminComponent } from './upgrade-to-admin/upgrade-to-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { OrderComponent } from './order/order.component';

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
    path: 'upgrade', component: UpgradeToAdminComponent, canActivate: [LoggedInGuard],
  },
  {
    path: '', component: DashboardComponent, canActivate: [LoggedInGuard]
  }
]

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, MakeOrderComponent, OrderItemComponent, OrderSummaryComponent, UpgradeToAdminComponent, OrderListComponent, OrderListItemComponent, OrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
