import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  certificado;

  constructor(private api: ApiService) { }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.certificado = myReader.result;
      var datos = this.certificado.split(',');

    console.log(myReader, ' :certificado en base64', datos[1].toString(), ' datos base64');

    this.api.postCertCifrado(datos).then().catch();
    }
    
    myReader.readAsDataURL(file);
    
  }
  
  enviarCert(){
    console.log('enviado con exito');
  }
  ngOnInit() {
  }

}
