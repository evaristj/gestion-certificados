import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
