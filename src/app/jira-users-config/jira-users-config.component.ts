import { Component, OnInit, Input } from '@angular/core';
import { JiraUser } from '../models.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jira-users-config',
  templateUrl: './jira-users-config.component.html',
  styleUrls: ['./jira-users-config.component.css']
})
export class JiraUsersConfigComponent implements OnInit {
  @Input() jiraUser: JiraUser;
  id: string;
  user_id: string;
  newName: string = '';
  newPass: string = '';
  newUrl: string = '';
  newProyecto: string = '';
  newComponente: string = '';
  editName = false;
  editPass = false;
  editUrl = false;
  editProject = false;
  editComponente = false;
  constructor(private api: ApiService) { }

  // name
  editNewName() {
    this.editName = true;
  }
  cancelNewName(){
    this.editName = false;
    this.newName = '';
  }
  // password
  editNewPass() {
    this.editPass = true;
  }
  cancelNewPass(){
    this.editPass = false;
    this.newPass = '';
  }
  // url
  editNewUrl() {
    this.editUrl = true;
  }
  cancelNewUrl(){
    this.editUrl = false;
    this.newUrl = '';
  }
  // proyecto
  editNewProject() {
    this.editProject = true;
  }
  cancelNewProject(){
    this.editProject = false;
    this.newProyecto = '';
  }
  // componente
  editNewComponente() {
    this.editComponente = true;
  }
  cancelNewComponente(){
    this.editComponente = false;
    this.newComponente = '';
  }
  editJiraName() {
    this.jiraUser.username = this.newName.trim();
    console.log(this.jiraUser, 'funcion name editar');
    this.callPutApi();
  }
  editJiraPass() {
    this.jiraUser.password = this.newPass.trim();
    console.log(this.jiraUser, 'funcion password editar');
    this.callPutApi();
  }
  editJiraUrl() {
    this.jiraUser.url = this.newUrl.trim();
    console.log(this.jiraUser, 'funcion url editar');
    this.callPutApi();
  }
  editJiraProject() {
    this.jiraUser.project = this.newProyecto.trim();
    console.log(this.jiraUser, 'funcion project editar');
    this.callPutApi();
  }
  editJiraComponente() {
    this.jiraUser.component = this.newComponente.trim();
    console.log(this.jiraUser, 'funcion component editar');
    this.callPutApi();
  }

  callPutApi(){
    this.api.updateJiraUser(this.jiraUser).then(() => {
      console.log(this.jiraUser);
      
    }).catch(console.error);

    this.editName = false;
    this.editPass = false;
    this.editUrl = false;
    this.editProject = false;
    this.editComponente = false;
  }
  ngOnInit() {
    console.log('on init', localStorage.getItem('id'));
    this.api.getJiraUser().then((responseJira: JiraUser) => {
      console.log('ts jira config', responseJira.user_id);
      this.jiraUser = responseJira;
    }).catch(() => {
      (console.error)
    });



  }
}
