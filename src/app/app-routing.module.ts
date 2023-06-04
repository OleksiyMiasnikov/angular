import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertComponent } from './cert/cert.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent }, 
  { path: 'certificates', component: CertificatesComponent }, 
  { path: 'main', component: MainPageComponent },      
  { path: 'cart', component: CartPageComponent },
  { path: 'cert', component: CertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
