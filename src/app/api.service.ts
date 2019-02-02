import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JiraUser } from './models.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  id: string;
  userName: string;
  urlJira = 'api/jira/';
  data: JiraUser;
  // options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  constructor(private http: HttpClient) { }

  getJiraUser(){
    this.id = localStorage.getItem('id');
    return this.http.get(this.urlJira + `${this.id}`).toPromise();
  }
  getUserName(){
    return this.userName = localStorage.getItem('userName');
  }
  // actualizar usuario jira
  updateJiraUser(updateJira){
    console.log(updateJira, 'ver el user_id');
    
    console.error;
    return this.http.put(this.urlJira + localStorage.getItem('id'), updateJira).toPromise();
  }

}
