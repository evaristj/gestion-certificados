import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  base64;
  newName: string;
  newRepo: string;
  newPass: string;
  newContacto: string;
  newLista: string;
  newIdOrga: string;
  newObser: string;
  certificadoCifrado: string;

  constructor(private api: ApiService) { }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.base64 = myReader.result;
      this.certificadoCifrado = this.base64.split(',');
    }
    myReader.readAsDataURL(file);

  }

  enviarCert() {
    this.api.postCertCifrado(this.certificadoCifrado[1], this.newName, this.newPass,
      this.newIdOrga, this.newRepo, this.newLista, this.newObser, this.newContacto)
      .then(console.error)
      .catch(console.error);
  }
  
  ngOnInit() {
  }

}
