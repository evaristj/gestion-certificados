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
  menSuccess: string = 'Certificado guardado en base de datos.';
  menFail: string = 'Certificado NO guardado, error';
  nombre_archivo: string;

  constructor(private api: ApiService) { }

  changeListener(event): void {
    this.nombre_archivo = event.target.value.split("\\")[2];
    console.log(this.nombre_archivo, ' : nombre del archivo a subir.');
    
    this.readThis(event.target);
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
      this.newIdOrga, this.newRepo, this.newLista, this.newObser, this.newContacto, this.nombre_archivo)
      .then((result) => {
        if (result) 
          alert(this.menSuccess);
      })
      .catch((error) => {
        if (error) 
          alert(this.menFail);
      });
  }
  
  ngOnInit() {
  }

}
