import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: 'orders', component: OrdersComponent, canActivate: [AdminGuard],
  },
  {
    path: 'products', component: ProductsComponent, canActivate: [AdminGuard],
  },
]

@NgModule({
  declarations: [
    OrdersComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }