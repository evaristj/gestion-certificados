import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Certificate, User, JiraUser } from './models.interface'

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  data: { lists: Array<Certificate> } = {
    lists: []};
  jiraUserId: number;
  constructor(private router: Router, private api: ApiService) { }

/*   loadDataFromBackend() {
    this.api
      .getJiraUser()
      .then((jiraUser: Array<any>) => {
        console.log( 'hola soy una prueba', jiraUser);
      })
      .catch(() => this.router.navigate(['/login']));
  } */

/*   loadDataFromBackend() {
    this.api
      .getLists()
      .then((rawLists: Array<any>) => {
        console.log(rawLists);
        const lists = rawLists.map(rawList => ({
          listId: rawList.id,
          createdAt: rawList.createdAt,
          modifiedAt: rawList.updatedAt,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: Certificate) => {
            list.tasks = await this.api.getTasks(list.listId);
            list.tasks = list.tasks.map((rawTask: any) => ({
              listTaskId: rawTask.idlist,
              taskId: rawTask.id,
              text: rawTask.task,
              description: 'añade una descripción...',
              completed: false,
              color: 'white',
              createdAt: new Date(rawTask.createdAt),
              modifiedAt: new Date(rawTask.updatedAt),
            }));
            return list;
          }),
        // tslint:disable-next-line:no-shadowed-variable
        ).then(lists => {
          this.data.lists = lists;
        });
      })
      .catch(() => this.router.navigate(['/login']));
  } */

/*   getData() {
    this.loadDataFromBackend();
    return this.data;
  } */

}
