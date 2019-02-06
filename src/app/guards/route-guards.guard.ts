import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticatedService } from '../services/authenticated.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardsGuard implements CanActivate {

  constructor(public auth: AuthenticatedService, public router: Router) {}

  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      window.alert("No puedes ver esta pagina");
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
