import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JiraUser, Certificate } from '../models.interface';

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
  jwt: string = localStorage.getItem('jwt');
  options = { headers: { Authorization: `Bearer ${this.jwt}` } };
  headerJira = { headers: { 'User-Agent': 'xx' } };
  optionsJira = { headers: { Authorization: `bearer eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Nlc3Npb24tc2VydmljZSIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YzYzZjJlMzI3ZGFmMjJlZGM1ZGI2NjEiLCJhdWQiOiJhdGxhc3NpYW4iLCJpbXBlcnNvbmF0aW9uIjpbXSwibmJmIjoxNTUwMDU1MzMzLCJyZWZyZXNoVGltZW91dCI6MTU1MDA1NTkzMywiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiZGE5MDFhNjYtNzJiOS00Y2QwLTg5YjItNDY1YWY1MzVmOTI0IiwiZXhwIjoxNTUyNjQ3MzMzLCJpYXQiOjE1NTAwNTUzMzMsImVtYWlsIjoiZXZhcmlzdC5qYXVtZUBnbWFpbC5jb20iLCJqdGkiOiJkYTkwMWE2Ni03MmI5LTRjZDAtODliMi00NjVhZjUzNWY5MjQifQ.DzxQm-IIOtANegfEy139Zp7O6xwaLn27FK-IXD9rP7Y5_T8IXDpoAIJbTqjisVZVHsqcfmKk9tLFP7cMl1zrbBhJdn3tQ4goTLmVcfbH0f-YBhZh6p9ssF0R9o_3Al3NPsp1jwf_8JMnyhwYUjaQiVEu_PhK37SwjuNhkkez0K_uJkSuPzSPZbCDcR1RlSnfFx_gPopjY1Iye-9XqVaHgCJQsz_nGhDmb4QLDN6ur1DY7yobvnTg-nY45gkXeQlsbiSrbO7jnGpJXDmeijUZvEoiyp1TFj_W4nvJtbXzsOiNSrNGACifJpDk8kMy8UIhPkem3Z6UVeN_ExAqcVlelw` } }

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
    return this.http.get(this.urlCertif, this.options).toPromise().then((resCertificate: any) => {
      this.certificates = resCertificate;
      return this.certificates;
    }).catch(() => {
      (console.error)
    });;
  }

  getOneCertificate() {
    let id = localStorage.getItem('idCert');
    return this.http.get(this.urlCertif + id, this.options).toPromise();
  }

  // actualizar certificados completados
  updateCertCompletado(cert, certId) {
    return this.http.put(this.urlCertif + `${certId}`, cert, this.options).toPromise().then((result) => {
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

    return this.http.post(this.urlCertif, body, this.options).toPromise();
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
    newFile.download = `${certificate.nombre_archivo}`;
    document.body.appendChild(newFile);
    newFile.click();
  }

  postTicketJira(certificate) {
    const fields = { project : { key: 'CER'}, summary: 'Certificado proximo caducar.',
      description: certificate.observaciones, issuetype: { name: 'Epic'}};
    const body = {
      "fields": {
        "project":
        {
          "key": "CER"
        },
        "summary": "Certificado va a caducar",
        "description": certificate.observaciones,
        "issuetype": {
          "name": "Epic"
        }
      }
    }
    console.log(body, ' :body');
    console.log('fields => ', fields, ' : fields');
    
    
    return this.http.post('/rest/api/2/issue',
    fields, this.optionsJira).toPromise();
  }

  loginJira(){
    let username = 'evarist.jaume@gmail.com';
    let password = '12345678';
    const body = { username, password };
    console.log(body, ' body login jira');
    
    return this.http.post('/rest/auth/1/session/', body, this.headerJira).toPromise();
  }
}
