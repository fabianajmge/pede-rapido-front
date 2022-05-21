import { CognitoService } from './../cognito.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private cognitoService: CognitoService,
    private router: Router) { }

  private isAuthenticated: boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.cognitoService.isAuthenticated().then((success: boolean) => {
          this.isAuthenticated = success;

          if (!this.isAuthenticated) {
            this.router.navigate(['/login/signIn']);
          }
      });

      return this.isAuthenticated;
   }

  canActivateChild() {
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });

    if (!this.isAuthenticated) {
      this.router.navigate(['/login/signIn']);
    }

    return this.isAuthenticated;
  }
}

