import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminGuard } from '../guards/admin.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'orders', component: OrdersComponent, canActivate: [AdminGuard],
  },
  {
    path: 'products', component: ProductsComponent, canActivate: [AdminGuard],
  },
  {
    path: 'edit-product/:productId', component: EditProductComponent, canActivate: [AdminGuard],
  },
]

@NgModule({
  declarations: [
    OrdersComponent,
    ProductsComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }