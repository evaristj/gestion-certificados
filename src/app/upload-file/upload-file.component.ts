import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: "https://example-file-upload-api"
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
