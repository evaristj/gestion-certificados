import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMainComponent } from './register-main/register-main.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DataManagerService } from './data-manager.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMainComponent,
    LoginMainComponent,
    ViewMainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataManagerService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
