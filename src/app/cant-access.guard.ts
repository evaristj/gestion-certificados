import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticatedService } from './authenticated.service';

@Injectable({
  providedIn: 'root'
})
export class CantAccessGuard implements CanActivate {

  constructor(public auth: AuthenticatedService, public router: Router) { }

  /*   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
    } 
    */
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      console.log('no puedes volver al login o register');
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
