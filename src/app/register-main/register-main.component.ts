import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.css']
})
export class RegisterMainComponent {
  username: string;
  password: string;
  error: any;
  valid: any;

  constructor(private api: ApiService) { }

  registerUser(){
    const { username, password } = this;
    if (username.trim() !== '' && password.trim() !== '') {
      if (username.trim().length >= 4) {
         this.api.register(username.trim(), password.trim()).then( result => {
        console.log(result);
        this.valid = result;
      })
      .catch(error => {
        console.log(error);
        this.error = error;        
      });
      }
    }
  }

}
