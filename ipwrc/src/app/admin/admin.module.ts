import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminGuard } from '../guards/admin.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';

const routes: Routes = [
  {
    path: 'orders', component: OrdersComponent, canActivate: [AdminGuard],
  },
  {
    path: 'products', component: ProductsComponent, canActivate: [AdminGuard],
  },
  {
    path: 'edit-product/:slug', component: EditProductComponent, canActivate: [AdminGuard],
  },
  {
    path: 'new-product', component: NewProductComponent, canActivate: [AdminGuard],
  },
  {
    path: '', component: DashboardComponent, canActivate: [AdminGuard],
  },
]

@NgModule({
  declarations: [
    OrdersComponent,
    ProductsComponent,
    EditProductComponent,
    NewProductComponent,
    DashboardComponent,
    OrderListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }