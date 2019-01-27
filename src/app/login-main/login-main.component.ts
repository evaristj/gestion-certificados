import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

  constructor(private api: ApiService, private router: Router) { }

  loginUser(){
    const { username, password } = this;

    this.api.login(username.trim(), password.trim())
    .then((response) => {
      console.log(response, 'entra en then de login');
      this.error = undefined;
      this.router.navigate(['/main']);
    }).catch(error => {
      this.error = error;
    })
  }

}
