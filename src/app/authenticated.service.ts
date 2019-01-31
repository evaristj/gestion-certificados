import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
 urlRegister = '/api/users';
 urlLogin = '/api/auth'
 jwt: any;
 dataUser: any;
 constructor(private http: HttpClient, private router: Router) { }

 register(username, password, email, role) {
   console.log(username, password, email, role, ' - registerFunctionApi.');
   const body = { username, password, email, role };
   return this.http.post(this.urlRegister, body).toPromise();
 }

 login(username, password) {
   const body = { username, password };
   return new Promise((resolve, reject) => {
     this.http.post(this.urlLogin, body)
       .toPromise().then(response => {
          console.log(response, 'status.200');
          let jwt = response;
          this.jwt = jwt;
          this.dataUser = Object.values(response);
          console.log(this.dataUser[0], 'primer valor');
          localStorage.setItem('jwt', this.jwt);
          localStorage.setItem('jiraUserId', this.dataUser[0]);
          resolve(200);
        console.log('fin login api');
      }).catch(() => {
          reject('User o password not found');
        });
   });
 }
 authLogout(): boolean {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
    console.log('borrado jwt', this.jwt);
    return false;
 }
 isAuthenticated(): boolean {
   const token = localStorage.getItem('jwt');
   if (token !== null) {
     return true;
   } else {
     return false;
   }
 }

}
