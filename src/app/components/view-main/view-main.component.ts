import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Certificate } from '../../models.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {
  @Input() certificados: Array<Certificate>;
  certificate: Certificate;

  constructor(private api: ApiService, private route: Router) { }

  sortAlias() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.alias > b.alias ? 1 : -1);
  }
  sortCaducidad() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.caducidad > b.caducidad ? 1 : -1);
  }
  sortId_orga() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.id_orga > b.id_orga ? 1 : -1);
  }
  sortName() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.integration_list > b.integration_list ? 1 : -1);
  }
  sortContacto() {
    this.certificados = this.certificados.sort((a: Certificate, b: Certificate) =>
      a.contacto_renovacion > b.contacto_renovacion ? 1 : -1);
  }

  showEliminados() {
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert.filter(result => result.eliminado);
    }).catch(console.error);
  }
  showNoEliminados() {
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert.filter(result => !result.eliminado);
    }).catch(console.error);
  }
  showAll() {
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert;
    }).catch(console.error);
  }

  showProxCaducidad() {
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert.filter(result => result.proxCaducidad);
    }).catch(console.error);
  }

  showCaducados() {
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert.filter(result => result.caducado
      );
    }).catch(console.error);
  }

  showAtivos(){
    this.api.loadCertificates().then((arrCert: any) => {
      this.certificados = arrCert.filter(result => !result.caducado && !result.eliminado);
    }).catch();
  }

  ngOnInit() {
    this.api.loadCertificates().then((resCertificate: any) => {
      this.certificados = resCertificate.filter(result => !result.eliminado);
    }).catch(() => {
      (console.error)
    });
  }

}
