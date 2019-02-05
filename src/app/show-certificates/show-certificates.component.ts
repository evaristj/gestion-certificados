import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../models.interface';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {
  @Input() certificate: Certificate;
  eliminar: boolean;
  constructor() { }

  ngOnInit() {
    
  }

}
