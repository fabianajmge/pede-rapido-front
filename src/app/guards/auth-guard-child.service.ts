import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService 

//implements CanActivateChild 
{

  // constructor(private cognitoService: CognitoService) { }

  // private isAuthenticated: boolean = false;

  // canActivateChild() {
  //   // this.cognitoService.isAuthenticated().then((success: boolean) => {
  //   //   this.isAuthenticated = success;
  //   // });
    

  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | boolean {
  //   return this.isAuthenticated;
  // }
  // }
}
