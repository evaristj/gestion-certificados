import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { RegisterMainComponent } from './register-main/register-main.component';
import { ViewMainComponent } from './view-main/view-main.component';

const routes: Routes = [
  { path: 'login', component: LoginMainComponent },
  { path: 'register', component: RegisterMainComponent },
  { path: 'main', component: ViewMainComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
