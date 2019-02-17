import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { urlRegister, urlRegisterJira, urlLogin } from "../api-config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
  dataUser: any;
  user_id: string;
  jwt: string = localStorage.getItem('jwt');
  options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  
  constructor(private http: HttpClient, private router: Router) { }

  register(username, password, email, role) {
    const body = { username, password, email, role };
    // creamos un usuario de jira con el username y password del usuario
    return this.http.post(urlRegister, body, this.options).toPromise();
  }

  registerJiraUser(user_id, username, password) {
    const body = { user_id, username, password };
    return this.http.post(urlRegisterJira, body).toPromise();
  }

  login(username, password) {
    const body = { username, password };
    return new Promise((resolve, reject) => {
      this.http.post(urlLogin, body)
        .toPromise().then(response => {
          this.dataUser = { ...response };
          this.jwt = this.dataUser.handlerToken;
          localStorage.setItem('jwt', this.jwt);
          localStorage.setItem('id', this.dataUser.id);
          localStorage.setItem('role', this.dataUser.role);
          localStorage.setItem('userName', this.dataUser.username);
          resolve(200);
        }).catch(() => {
          reject('User o password not found');
        });
    });
  }
  authLogout(): boolean {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    return (token !== null) ? true : false;
  }

}
