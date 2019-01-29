import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {

/*   data: {lists: Array<List>};
 */
  constructor(private dataManager: DataManagerService) { }

  ngOnInit() {
    /* this.data = this.dataManager.getData(); */
  }

}
