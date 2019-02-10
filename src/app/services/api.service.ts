import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JiraUser, Certificate } from '../models.interface';
import { DetailCertificateComponent } from '../detail-certificate/detail-certificate.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  certificates: Array<Certificate>;
  certificate: Certificate;
  id: string;
  userName: string;
  urlJira = 'api/jira/';
  urlCertif = 'api/certificates/';
  data: JiraUser;

  constructor(private http: HttpClient) { }

  getJiraUser() {
    this.id = localStorage.getItem('id');
    return this.http.get(this.urlJira + `${this.id}`).toPromise();
  }
  getUserName() {
    return this.userName = localStorage.getItem('userName');
  }
  // actualizar usuario jira
  updateJiraUser(updateJira) {
    console.error;
    return this.http.put(this.urlJira + localStorage.getItem('id'), updateJira).toPromise();
  }
  // traer certificados
  loadCertificates() {
    return this.http.get(this.urlCertif).toPromise().then((resCertificate: any) => {
      this.certificates = resCertificate;
      return this.certificates;
    }).catch(() => {
      (console.error)
    });;
  }

  getOneCertificate() {
    let id = localStorage.getItem('idCert');
    return this.http.get(this.urlCertif + id).toPromise();
  }

  // actualizar certificados completados
  updateCertCompletado(cert, certId) {

    return this.http.put(this.urlCertif + `${certId}`, cert).toPromise().then((result) => {
      console.log(result, ' funcion api put cert')
    })
      .catch(console.error);
  }

  postCertCifrado(cifrado, alias, password, id_orga, repositorio_url, integration_list,
    observaciones, contacto_renovacion) {
    let nombre_cliente = id_orga;

    const body = {
      alias, password, id_orga, nombre_cliente, repositorio_url, contacto_renovacion,
      integration_list, observaciones, cifrado
    };

    return this.http.post(this.urlCertif, body).toPromise();
  }

  downloadCertificate(certificate: Certificate) {
    let certificateType = certificate.alias;
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
    newFile.download = `${certificate.alias}` + '.crt';
    document.body.appendChild(newFile);
    newFile.click();
  }
}
