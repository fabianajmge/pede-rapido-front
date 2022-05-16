import { CognitoService } from 'src/app/cognito.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private cognitoService: CognitoService) { }

  private isAuthenticated: boolean = false;

  canActivate() {
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });
    return this.isAuthenticated;
  }
}
