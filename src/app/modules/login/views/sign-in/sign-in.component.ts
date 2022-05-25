import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from 'src/app/modules/login/service/cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  loading: boolean;
  user: IUser;
  tipoUsuario: number = 0;
  opcoesAdministrativo: boolean = false;
  usuarioAdministrativo: number = 4;
  usuarioGerente: number = 3;
  usuarioGarcom: number = 1;
  usuarioCozinha: number = 2;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
    .then(() => {
      this.redirecionaAcesso();
    }).catch(() => {
      this.loading = false;
    });
  }

  redirecionaAcesso(): void {
    this.cognitoService.getUser().then((user: any) => {
      this.user = user;
      this.tipoUsuario = user.attributes['custom:tipoUsuario'];
      console.log('user: ', user.attributes['custom:tipoUsuario']);
      this.opcoesAdministrativo = this.tipoUsuario == this.usuarioAdministrativo
      || this.tipoUsuario == this.usuarioGerente;

      if (this.tipoUsuario == this.usuarioCozinha) {
        this.router.navigate(['pedido/fila-cozinha']);
      } else if (this.tipoUsuario == this.usuarioGarcom){
        this.router.navigate(['pedido/fila-garcom']);
      } else {
        this.router.navigate(['/second-menu']);
      }
    });
  }

}