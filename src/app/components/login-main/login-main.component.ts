import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedService } from '../../services/authenticated.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent {
  username: string;
  password: string;

  constructor(private auth: AuthenticatedService, private router: Router) { }

  loginUser() {
    const { username, password } = this;

    this.auth.login(username, password)
      .then(() => {
        this.router.navigate(['/main']);
      }).catch(() => {
        console.error;
      });
    this.password = '';
    this.username = '';
  }

}
