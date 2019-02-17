import { Component } from '@angular/core';
import { AuthenticatedService } from '../../services/authenticated.service';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.css']
})
export class RegisterMainComponent {
  username: string;
  password: string;
  email: string;
  role: number = 0;
  error: any;
  valid: any;
  user_id: string;

  constructor(private auth: AuthenticatedService) { }

  registerUser() {
    const { username, password, email, role } = this;
    this.auth.register(username, password, email, role).then(result => {
      this.valid = { ...result };
      localStorage.setItem('user_id', this.valid.id)
      this.user_id = localStorage.getItem('user_id');

      this.auth.registerJiraUser(this.user_id, username, password).then((result) => {
        alert('Usuario: ' + username + '\nEmail: ' + email + '\nCreado en Jira y en aplicación.');
      }).catch();
    })
      .catch(error => {
        console.log(error);
        this.error = error;
      });
  }

}
