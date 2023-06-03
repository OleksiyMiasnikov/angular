import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-login',
  templateUrl: './top-bar-login.component.html',
  styleUrls: ['./top-bar-login.component.scss']
})
export class TopBarLoginComponent {
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

}
