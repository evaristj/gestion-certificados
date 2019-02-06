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
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.alias > b.alias ? 1 : -1);
    console.log('ordenados por alias', this.certificados);
  }
  sortCaducidad() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.caducidad > b.caducidad ? 1 : -1);
    console.log('ordenados por caducidad', this.certificados);

  }
  sortId_orga() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.id_orga > b.id_orga ? 1 : -1);
  }
  sortName() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.nombre_cliente > b.nombre_cliente ? 1 : -1);
  }
  sortContacto() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.contacto_renovación > b.contacto_renovación ? 1 : -1);
  }

  showEliminados() {
    this.api.loadCertificates().then((arrCert: any) => {
      console.log('show certificados', arrCert);
      this.certificados = arrCert.filter(result => result.eliminado);
    }).catch(console.error);
  }
  showNoEliminados() {
    this.api.loadCertificates().then((arrCert: any) => {
      console.log('show certificados', arrCert);
      this.certificados = arrCert.filter(result => !result.eliminado);
    }).catch(console.error);
  }
  showAll() {
    this.api.loadCertificates().then((arrCert: any) => {
      console.log('show certificados', arrCert);
      this.certificados = arrCert;
    }).catch(console.error);
  }
  ngOnInit() {
    this.api.loadCertificates().then((resCertificate: any) => {
      console.log('array de certificados: ', resCertificate);
      this.certificados = resCertificate.filter(result => !result.eliminado);
    }).catch(() => {
      (console.error)
    });
  }

}
