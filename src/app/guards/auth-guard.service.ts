import { CognitoService, IUser } from './../cognito.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  tipoUsuario: number = 0;
  opcoesAdministrativo: boolean = false;
  usuarioAdministrativo: number = 4;
  usuarioGerente: number = 3;
  usuarioGarcom: number = 1;
  usuarioCozinha: number = 2;

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
          } else {
            this.redirecionaAcesso();
          }
      });

      return this.isAuthenticated;
   }

  private redirecionaAcesso(): void {
    this.cognitoService.getUser().then((user: any) => {
      this.tipoUsuario = user.attributes['custom:tipoUsuario'];
      console.log('user: ', user.attributes['custom:tipoUsuario']);
      this.opcoesAdministrativo = this.tipoUsuario == this.usuarioAdministrativo
      || this.tipoUsuario == this.usuarioGerente;

      if (this.tipoUsuario == this.usuarioCozinha) {
        this.router.navigate(['pedido/fila-cozinha']);
      } else {
        this.router.navigate(['/second-menu']);
      }
    });
}
}
