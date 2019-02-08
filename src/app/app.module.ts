import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMainComponent } from './register-main/register-main.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { JiraUsersConfigComponent } from './jira-users-config/jira-users-config.component';
import { ShowCertificatesComponent } from './show-certificates/show-certificates.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthenticatedService } from './services/authenticated.service';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DetailCertificateComponent } from './detail-certificate/detail-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMainComponent,
    LoginMainComponent,
    ViewMainComponent,
    NavbarComponent,
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
