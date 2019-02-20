import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticatedService } from './services/authenticated.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {
  DetailCertificateComponent, JiraUsersConfigComponent, LoginMainComponent,
  RegisterMainComponent, ViewMainComponent, ShowCertificatesComponent,
  NotfoundComponent, NavbarLoginComponent, UploadFileComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMainComponent,
    LoginMainComponent,
    ViewMainComponent,
    JiraUsersConfigComponent,
    ShowCertificatesComponent,
    NotfoundComponent,
    NavbarLoginComponent,
    UploadFileComponent,
    DetailCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [
    ApiService,
    AuthenticatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
