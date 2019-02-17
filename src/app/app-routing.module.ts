import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { RegisterMainComponent } from './components/register-main/register-main.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { JiraUsersConfigComponent } from './components/jira-users-config/jira-users-config.component';
import { RouteGuardsGuard as AuthGuard } from './guards/route-guards.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CantAccessGuard } from './guards/cant-access.guard';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DetailCertificateComponent } from './components/detail-certificate/detail-certificate.component';

const routes: Routes = [
  { path: 'login', component: LoginMainComponent },
  { path: 'register', component: RegisterMainComponent, canActivate: [CantAccessGuard],
    data: { expectedRole: ['1'] }},
  { path: 'uploadFile', component: UploadFileComponent, canActivate: [CantAccessGuard], 
    data: { expectedRole: ['1'] }},
  { path: 'detailCertificate', component: DetailCertificateComponent, canActivate: [AuthGuard]},
  { path: 'main', component: ViewMainComponent, canActivate: [AuthGuard] },
  { path: 'jiraUsersConfig', component: JiraUsersConfigComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
