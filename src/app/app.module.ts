import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HeaderComponent } from './header/header.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MenuIconsComponent } from './menu-icons/menu-icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertComponent } from './cert/cert.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        LoginPageComponent,
        SignUpPageComponent,
        HeaderComponent,
        CartPageComponent,        
        FooterComponent,
        CertificatesComponent,
        CertComponent,        
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MenuIconsComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule {}
