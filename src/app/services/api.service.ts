import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JiraUser, Certificate } from '../models.interface';
import { urlCertif, urlJira, urlLoginJira, urlTicketJira, 
  bodyLogin, objJsonB64 } from "../api-config";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  certificates: Array<Certificate>;
  certificate: Certificate;
  id: string;
  userName: string;
  data: JiraUser;
  jwt: string = localStorage.getItem('jwt');
  options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  headerJira = { headers: { 'User-Agent': 'xx' } };

  constructor(private http: HttpClient) { }

  getJiraUser() {
    this.id = localStorage.getItem('id');
    return this.http.get(urlJira + `${this.id}`).toPromise();
  }
  getUserName() {
    return this.userName = localStorage.getItem('userName');
  }
  // actualizar usuario jira
  updateJiraUser(updateJira) {
    console.error;
    return this.http.put(urlJira + localStorage.getItem('id'), updateJira).toPromise();
  }
  // traer certificados
  loadCertificates() {
    return this.http.get(urlCertif, this.options).toPromise().then((resCertificate: any) => {
      this.certificates = resCertificate;
      return this.certificates;
    }).catch(() => {
      (console.error)
    });;
  }

  getOneCertificate() {
    let id = localStorage.getItem('idCert');
    return this.http.get(urlCertif + id, this.options).toPromise();
  }

  // actualizar certificados completados
  updateCertCompletado(cert, certId) {
    return this.http.put(urlCertif + `${certId}`, cert, this.options).toPromise().then((result) => {
    })
      .catch(console.error);
  }

  postCertCifrado(cifrado, alias, password, id_orga, repositorio_url, integration_list,
    observaciones, contacto_renovacion, nombre_archivo) {
    let nombre_cliente = id_orga;

    const body = {
      alias, password, id_orga, nombre_cliente, repositorio_url, contacto_renovacion,
      integration_list, observaciones, cifrado, nombre_archivo
    };

    return this.http.post(urlCertif, body, this.options).toPromise();
  }

  downloadCertificate(certificate: Certificate) {
    let certificateType = certificate.nombre_archivo.split('.')[1];
    let contentType = "file/" + certificateType;

    let byteCharacters = atob(certificate.cifrado);
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray], {
      type: contentType
    });

    let newFile = document.createElement("a");
    newFile.href = URL.createObjectURL(blob);
    newFile.download = `${certificate.nombre_archivo}`;
    document.body.appendChild(newFile);
    newFile.click();
  }

  postTicketJira(certificate) {

    const optionsJira = { headers: { Authorization: `Basic ${objJsonB64}`, 'User-Agent': 'xx'  } }

    const bodyTicket = {
      fields: {
        project:
        {
          key: "CER"
        },
        summary: "Certificado: " + certificate.id + " va a caducar. Alias: " + certificate.alias,
        description: certificate.observaciones,
        issuetype: {
          name: "Epic"
        }
      }
    }
    
    return this.http.post(urlTicketJira, bodyTicket, optionsJira).toPromise();
  }

  loginJira(){
    return this.http.post(urlLoginJira, bodyLogin, this.headerJira).toPromise();
  }
}
