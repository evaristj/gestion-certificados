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
import { JiraUsersConfigComponent } from './jira-users-config/jira-users-config.component';
import { ShowCertificatesComponent } from './show-certificates/show-certificates.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMainComponent,
    LoginMainComponent,
    ViewMainComponent,
    NavbarComponent,
    JiraUsersConfigComponent,
    ShowCertificatesComponent,
    NotfoundComponent
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
