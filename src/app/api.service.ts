import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  id: string;
  userName: string;
  urlJira = 'api/jira/';
  // options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  constructor(private http: HttpClient) { }

  getJiraUser(){
    this.id = localStorage.getItem('id');
    return this.http.get(this.urlJira + `${this.id}`).toPromise();
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
