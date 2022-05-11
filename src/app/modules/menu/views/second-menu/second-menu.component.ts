import { CognitoService, IUser } from 'src/app/cognito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-menu',
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.css']
})
export class SecondMenuComponent implements OnInit {
  loading: boolean;
  user: IUser;
  tipoUsuario: number = 0;
  opcoesAdministrativo: boolean = false;
  usuarioAdministrativo: number = 4;
  usuarioGerente: number = 3;
  usuarioGarcom: number = 1;
  usuarioCozinha: number = 2;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
   }

  ngOnInit(): void {
    this.cognitoService.getUser().then((user: any) => {
      this.user = user;
      this.tipoUsuario = user.attributes['custom:tipoUsuario'];
      console.log('user: ', user.attributes['custom:tipoUsuario']);
      this.opcoesAdministrativo = this.tipoUsuario == this.usuarioAdministrativo
      || this.tipoUsuario == this.usuarioGerente;

      if (this.tipoUsuario == this.usuarioCozinha) {
        console.log('direciona pra tela da cozinha');
      }
    });
  }

}
