import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root',
})
  
export class AuthService {

  constructor(private http: HttpClient) {} 
  
  login(user: User) {
    console.log('auth.login. User: ' + user.username);
    let body = JSON.stringify(user);
    
    return this.http.get('http://localhost:8080/tags')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
