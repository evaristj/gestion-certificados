import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail-certificate',
  templateUrl: './detail-certificate.component.html',
  styleUrls: ['./detail-certificate.component.css']
})
export class DetailCertificateComponent implements OnInit {
  @Input() certificate: Certificate;
  menError = 'Fallo al ver los detalles del certificado.'
  valid: boolean;
  constructor(private api: ApiService) { }

  downloadFile(certificate: Certificate) {
    this.api.downloadCertificate(certificate);
  }

  ngOnInit() {
    this.api.getOneCertificate().then( (result: Certificate) => {
      this.valid = true;
      this.certificate = result;
    }).catch( () => {
      console.error;
      this.valid = false;
      alert(this.menError);
    });
  }

}
