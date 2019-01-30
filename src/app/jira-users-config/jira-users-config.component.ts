import { Component, OnInit } from '@angular/core';
import { AuthenticatedService } from '../authenticated.service';

@Component({
  selector: 'app-jira-users-config',
  templateUrl: './jira-users-config.component.html',
  styleUrls: ['./jira-users-config.component.css']
})
export class JiraUsersConfigComponent implements OnInit {
  id: number;
  username: string;
  password: string;

  constructor(private auth: AuthenticatedService) { }

  /* jiraUser() {
    const { username, password } = this;

    this.auth.login(username.trim(), password.trim())
      .then((response) => {
        console.log(response, 'entra en then de login');
        this.error = undefined;
        this.router.navigate(['/main']);
      }).catch(error => {
        this.error = error;
      });
    this.password = '';
    this.username = '';
  } */
  ngOnInit() {
  }

}
