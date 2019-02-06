import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JiraUser, Certificate } from '../models.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  certificate: Array<Certificate>;
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
    console.log(updateJira, 'ver el user_id');

    console.error;
    return this.http.put(this.urlJira + localStorage.getItem('id'), updateJira).toPromise();
  }
  // traer certificados
  loadCertificates() {
    return this.http.get(this.urlCertif).toPromise().then((resCertificate: any) => {
      console.log('atributos del certificado', resCertificate);
      this.certificate = resCertificate;
      return this.certificate;
    }).catch(() => {
      (console.error)
    });;
  }

  // actualizar certificados completados
  updateCertCompletado(cert, certId) {
    console.log(cert, ' - ', certId, ' : certificado e id');

    return this.http.put(this.urlCertif + `${certId}`, cert).toPromise().then((result) => {
      console.log(result, ' funcion api put cert')
    })
      .catch(console.error);
  }

}
