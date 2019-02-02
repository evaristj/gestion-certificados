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

  updateJiraUser(updateJira){
    console.log(updateJira, 'actualizando jiraUser api.service');
    this.data = {...updateJira};
    console.log(this.data.username, 'nombre de usuario a modificar');
    // me he quedado por aqui, creo que no estoy enviando bien el body
    //const body = { updateJira };
    //console.log(body, 'json para enviar al backend');
    
    this.id = localStorage.getItem('id');
    console.error;
    return this.http.put(this.urlJira + localStorage.getItem('id'), updateJira).toPromise();

  }
 /*  getLists(): any {
    return this.http.get(this.urlList, this.options).toPromise();
  }
  getTasks(idlist: number): any {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.urlListTasks + idlist, this.options)
        .toPromise()
        .then(tasks => {
          if (tasks) {
            resolve(tasks);
          } else {
            resolve([]);
          }
        })
        .catch(error => {
          console.log(error);
          resolve([]);
        });
    });
  } */

}
