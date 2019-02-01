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
  userName: string = '';
  url: string = '';
  proyecto: string = '';
  componente: string = '';
  constructor(private api: ApiService) { }
 
  editJiraUser(){

  }
  ngOnInit() {
    console.log('on init');
    
    this.api.getJiraUser().then((responseJira: any) => {
      console.log('ts jira config', responseJira.id);
      
      this.jiraUser = responseJira; 
    }).catch(console.error);
  }
}
