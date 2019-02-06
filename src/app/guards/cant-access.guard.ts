import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticatedService } from '../services/authenticated.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantAccessGuard implements CanActivate {

  constructor(public auth: AuthenticatedService, public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const expectedRole = route.data.expectedRole;
    let role = localStorage.getItem('role');
    console.log(role, 'role canActivate y expected', expectedRole.toString());

    if (role === expectedRole.toString()) {
      console.log('son iguales');

    } else {
      console.log('no son iguales');
    }

    if (role !== expectedRole.toString()/* this.auth.isAuthenticated() */) {
      console.log('no tienes permisos de admin');
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
