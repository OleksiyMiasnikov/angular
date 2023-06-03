import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { TopBarLoginComponent } from './top-bar-login/top-bar-login.component';

const routes: Routes = [
  {
    path: '',
    component: TopBarLoginComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignUpPageComponent },     
    ],
  },
  {
    path: '',
    component: HeaderComponent,
    children: [          
      { path: 'main', component: MainPageComponent },      
      { path: 'cart', component: CartPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
