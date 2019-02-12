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
  modify: boolean;
  editAlias; editArchivo; editEntidad; editSubject; editCaducidad; editIdOrga = false;
  editObservaciones; editRepositorio; editContacto; editLista = false;
  newAlias: string = '';
  newNameFile: string = '';
  newContacto: string = '';
  newIdOrga: string = '';
  newObser: string = '';
  newList: string = '';
  newRepo: string = '';

  constructor(private api: ApiService) { }

  handlerEdit(edit: string) {
    this[edit] = !this[edit];
  }
  cancelHandlerEdit(edit: string, newInput: string) {
    this[edit] = false;
    this[newInput] = '';
  }

  editCertAlias(event: string) {
    if (this.certificate.alias != this[event].trim()) {
      this.certificate.alias = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }
  editCertFile(event: string) {
    if (this.certificate.nombre_archivo != this[event].trim()) {
      this.certificate.nombre_archivo = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  editCertIdOrga(event: string) {
    if (this.certificate.id_orga != this[event].trim()) {
      this.certificate.id_orga = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  editCertContacto(event: string) {
    if (this.certificate.contacto_renovacion != this[event].trim()) {
      this.certificate.contacto_renovacion = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  editCertRepo(event: string) {
    if (this.certificate.repositorio_url != this[event].trim()) {
      this.certificate.repositorio_url = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  editCertObser(event: string) {
    if (this.certificate.observaciones != this[event].trim()) {
      this.certificate.observaciones = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  editCertList(event: string) {
    if (this.certificate.integration_list != this[event].trim()) {
      this.certificate.integration_list = this[event].trim();
      this.callPutCert();
    } else {
      alert('no se han modificado datos.');
    }
  }

  callPutCert() {
    this.api.updateCertCompletado(this.certificate, this.certificate.id).then(() => {
      alert('Certificado actualizado correctamente.');
    }).catch(() => {
      alert('Certificado no se ha podido actualizar.');
      console.error
    });
    this.editAlias = false;
    this.editArchivo = false;
    this.editEntidad = false;
    this.editSubject = false;
    this.editCaducidad = false;
    this.editIdOrga = false;
    this.editObservaciones = false;
    this.editRepositorio = false;
    this.editContacto = false;
    this.editLista = false;
  }

  downloadFile(certificate: Certificate) {
    this.api.downloadCertificate(certificate);
  }

  ngOnInit() {
    this.api.getOneCertificate().then((result: Certificate) => {
      this.valid = true;
      this.certificate = result;
    }).catch(() => {
      console.error;
      this.valid = false;
      alert(this.menError);
    });
  }

}
