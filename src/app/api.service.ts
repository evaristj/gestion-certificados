import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // urlRegister = 'https://localhost:5001/api/users';
  urlRegister = '/users';

  constructor(private http: HttpClient) { }

  register(username, password) {
    console.log(username, password, ' - registerFunctionApi.');
    return this.http.post(this.urlRegister, { username, password }).toPromise();
  }

}
