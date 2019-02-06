import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interface';
import { ApiService } from '../services/api.service';
import { ViewMainComponent } from '../view-main/view-main.component';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {
  @Input() certificados: Array<Certificate>;
  @Input() certificate: Certificate;
  eliminar: boolean;
  mensaje = '¿Seguro que quieres eliminar este certificado?';
  constructor(private api: ApiService, private view: ViewMainComponent) { }

  confirmDel(cert: Certificate) {
    this.api.updateCertCompletado(cert, cert.id);    
  }
  ngOnInit() {

  }

}
