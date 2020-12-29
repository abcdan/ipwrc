import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import { ChooseComponent } from './choose/choose.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'choose', component: ChooseComponent,
  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, ChooseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
