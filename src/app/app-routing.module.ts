import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { RegisterMainComponent } from './register-main/register-main.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { JiraUsersConfigComponent } from './jira-users-config/jira-users-config.component';
import { RouteGuardsGuard as AuthGuard } from './route-guards.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'login', component: LoginMainComponent },
  { path: 'register', component: RegisterMainComponent },
  { path: 'main', component: ViewMainComponent, canActivate: [AuthGuard] },
  { path: 'jiraUsersConfig', component: JiraUsersConfigComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
