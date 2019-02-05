import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {
  @Input() certificados: Array<Certificate>;
  certificate: Certificate;

  constructor(private api: ApiService) { }

  sortAlias() { 
    this.certificados = this.certificados.sort( (a: Certificate,b: Certificate) => a.alias > b.alias ? 1 : -1 );
    console.log('ordenados por alias',this.certificados);
    
    
  }

  ngOnInit() {
    this.api.loadCertificates().then((resCertificate: any) => {
      console.log('array de certificados: ', resCertificate);
      this.certificados = resCertificate;
    }).catch(() => {
      (console.error)
    });
  }

}
