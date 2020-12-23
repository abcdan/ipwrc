import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ItemComponent } from './cart/item/item.component';
import { OrdersComponent } from './admin/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductsComponent,
    NavigationComponent,
    HomeComponent,
    AccountComponent,
    ItemComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
