import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  afuConfig = {
    multiple: false,
    formatsAllowed: ".pfx,.p12",
    maxSize: "1",
    uploadAPI: {
      url: "https://example-file-upload-api",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        /* "Authorization": `Bearer ${token}` */
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false
  };

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
      var datos = this.certificado.substring(39);

    console.log(myReader, ' :certificado en base64', datos, ' datos base64');

    this.api.postCertCifrado(datos).then().catch();
    }
    
    myReader.readAsDataURL(file);
    
  }
  
  ngOnInit() {
  }

}
