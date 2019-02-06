import { Component, Input, OnInit } from '@angular/core';
import { AuthenticatedService } from '../services/authenticated.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit{
  @Input() userName: string;
  constructor(private auth: AuthenticatedService, private api: ApiService) { }

  logout(){
    this.auth.authLogout();
  }

  ngOnInit(){
    console.log(this.api.getUserName(),'welcome');
    this.userName = this.api.getUserName();
  }
}
