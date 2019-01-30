import { Component } from '@angular/core';
import { AuthenticatedService } from '../authenticated.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent {

  constructor(private auth: AuthenticatedService) { }

  logout(){
    this.auth.authLogout();
  }
}
