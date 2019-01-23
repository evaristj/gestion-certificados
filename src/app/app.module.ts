import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMainComponent } from './register-main/register-main.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { ViewMainComponent } from './view-main/view-main.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMainComponent,
    LoginMainComponent,
    ViewMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
