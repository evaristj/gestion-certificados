import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // urlRegister = 'https://localhost:5001/api/users';
  urlRegister = '/api/users';
  urlLogin = '/api/auth'
  jwt: string;
  constructor(private http: HttpClient) { }

  register(username, password, email, role) {
    console.log(username, password, email, role, ' - registerFunctionApi.');
    const body = { username, password, email, role };
    return this.http.post(this.urlRegister, body).toPromise();
  }

  login(username, password) {
    const body = { username, password };
    return new Promise((resolve, reject) => {
      this.http.post(this.urlLogin, body)
        .toPromise().then(() => {
          reject('User o password not found');
        }).catch(maybeNotAndError => {
          if (maybeNotAndError.status === 200) {
            console.log('status.error.200');
            const jwt = maybeNotAndError.error.text;
            this.jwt = jwt;
            localStorage.setItem('jwt', jwt);
            resolve(200);
          } else if (maybeNotAndError.status === 401) {
            reject('Wrong password');
          } else {
            reject('Try again');
          }
          console.log('fin login api');
        });
    });
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    if (token !== null) {
      return true;
    } else {
      return false;
    }
  }
}
