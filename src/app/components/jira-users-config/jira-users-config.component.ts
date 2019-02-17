import { Component, OnInit, Input } from '@angular/core';
import { JiraUser } from '../../models.interface';
import { ApiService } from '../../services/api.service';

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
  newIssueType: string = '';
  newDescription: string= '';
  editName = false;
  editPass = false;
  editUrl = false;
  editProject = false;
  editComponente = false;
  editIssueType = false;
  editDescription = false;
  constructor(private api: ApiService) { }

  handlerEdit(edit: string){
    this[edit] = !this[edit];
  }
  cancelHandlerEdit(edit: string, newInput: string){
    this[edit] = false;
    this[newInput] = '';
  }

  editJiraName() {
    this.jiraUser.username = this.newName.trim();
    this.callPutApi();
  }
  editJiraPass() {
    this.jiraUser.password = this.newPass.trim();
    this.callPutApi();
  }
  editJiraUrl() {
    this.jiraUser.url = this.newUrl.trim();
    this.callPutApi();
  }
  editJiraProject() {
    this.jiraUser.project = this.newProyecto.trim();
    this.callPutApi();
  }
  editJiraComponente() {
    this.jiraUser.component = this.newComponente.trim();
    this.callPutApi();
  }
  editJiraIssueType() {
    this.jiraUser.issueType = this.newIssueType.trim();
    this.callPutApi();
  }
  editJiraDescription() {
    this.jiraUser.description = this.newDescription.trim();
    this.callPutApi();
  }

  callPutApi() {
    this.api.updateJiraUser(this.jiraUser).then(() => {
      alert('Usuario de jira actualizado correctamente.');
    }).catch( () => {
      alert('Usuario de jira no se ha podido actualizar.');
      console.error
    });

    this.editName = false;
    this.editPass = false;
    this.editUrl = false;
    this.editProject = false;
    this.editComponente = false;
  }
  ngOnInit() {
    this.api.getJiraUser().then((responseJira: JiraUser) => {
      this.jiraUser = responseJira;
    }).catch(() => {
      (console.error)
    });



  }
}
