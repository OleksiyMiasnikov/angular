import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';


@Injectable({
  providedIn: 'root',
})
  
export class AuthService {

  constructor(private http: HttpClient) {} 
  
  login(user: User) {
    console.log('auth.login. User: ' + user.username); 
    
    return this.http.post('http://localhost:8080/login',
      { name: user.username, password: user.password },
      { observe:'response'}); 
  }
}
