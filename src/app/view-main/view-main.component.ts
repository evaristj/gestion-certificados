import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {
  @Input() certificate: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.loadCertificates().then(({...resCertificate}: any) => {
      console.log('array de certificados: ', resCertificate);
      this.certificate = {...resCertificate};
      console.log(this.certificate[0]);
      
    }).catch(() => {
      (console.error)
    });
  }

}
