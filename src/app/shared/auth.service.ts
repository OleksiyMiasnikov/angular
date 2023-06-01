import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../user';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
  
export class AuthService {

  constructor(private http: HttpClient) {} 
  
  login(user: User) {
    console.log('auth.login. User: ' + user.username); 
    
    return this.http.post('http://localhost:8080/login',
      { name: user.username, password: user.password },
      { observe: 'response' })
      .pipe(tap(this.setTokens)); 
  }

  private setTokens(response: any) {
    console.log('Setting tokens.');
    if (response) {
      localStorage.setItem('access-token', response.headers.get('access_token'));
      localStorage.setItem('refresh_token', response.headers.get('refresh_token'));
    } else {
      console.log('Clearing local storage.');
      localStorage.clear();
    }    
  }

  get token() {
    const accessToken = localStorage.getItem('access_token')!;    
    if (this.isTokenExpired(accessToken)) {
      console.log('Access token has been expired!');
      return null;
    }
    console.log('Getting access token.');
    return localStorage.getItem('access_token');
  }

  logout() {
    console.log('Logout!');
    this.setTokens(null);
  }

  private isTokenExpired(token: String): boolean {
    console.log('Determining token expiration.');
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  isAuthenticated() {
    return !!this.token;
  }
}
