import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthenticatedService } from '../../services/authenticated.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent {
  urlLogin: '/api/auth';
  username: string;
  password: string;
  error: any;

  constructor(private auth: AuthenticatedService, private router: Router) { }

  loginUser() {
    const { username, password } = this;

    this.auth.login(username, password)
      .then(() => {
        this.error = undefined;
        this.router.navigate(['/main']);
      }).catch(error => {
        this.error = error;
      });
    this.password = '';
    this.username = '';
  }

}
