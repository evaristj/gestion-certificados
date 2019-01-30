import { Component, OnInit, Input } from '@angular/core';
import { JiraUser } from '../models.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jira-users-config',
  templateUrl: './jira-users-config.component.html',
  styleUrls: ['./jira-users-config.component.css']
})
export class JiraUsersConfigComponent implements OnInit {
  @Input() jiraUser: JiraUser;

  constructor(private api: ApiService) { }
 
  ngOnInit() {
    this.api.getJiraUser().then((responseJira: any) => {
      this.jiraUser = responseJira; 
    }).catch(console.error);
  }

}
