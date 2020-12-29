import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product/:slug', component: ProductComponent},
    {path: 'products', component: ProductsComponent},
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {path: 'account', component: AccountComponent},
    {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
