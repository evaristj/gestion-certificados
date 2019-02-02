import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthenticatedService } from '../services/authenticated.service';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.css']
})
export class RegisterMainComponent {
  username: string;
  password: string;
  email: string;
  role: number;
  error: any;
  valid: any;

  constructor(private auth: AuthenticatedService) { }

  registerUser() {
    const { username, password, email, role } = this;
      this.auth.register(username, password, email, role).then(result => {
        console.log(result);
        this.valid = result;
      })
        .catch(error => {
          console.log(error);
          this.error = error;
        });
  }

}
