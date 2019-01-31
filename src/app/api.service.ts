import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jiraUserId: string;
  userName: string;
  urlJira = 'api/jira/';
  // options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  constructor(private http: HttpClient) { }

  getJiraUser(){
    this.jiraUserId = localStorage.getItem('jiraUserId');
    return this.http.get(this.urlJira + `${this.jiraUserId}`).toPromise();
  }
  getUserName(){
    return this.userName = localStorage.getItem('userName');
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
