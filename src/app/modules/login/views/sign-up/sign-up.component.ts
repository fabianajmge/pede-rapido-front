import { Restaurante } from './../../model/restaurante';
import { take } from 'rxjs';
import { RestauranteService } from './../../service/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from 'src/app/modules/login/service/cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;
  restaurantes: Restaurante[] = [];
  apresentaCampos = false;

  constructor(private router: Router,
              private cognitoService: CognitoService,
              private restauranteService: RestauranteService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.user.tipoUsuario = 0;
    this.user.idRestaurante = 0;
    this.restauranteService.getRestaurantes().pipe(take(1))
    .subscribe({
      next : (r) => this.restaurantes = r
    });
  }

  public signUp(): void {
    this.loading = true;
    this.apresentaCampos = false;
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/login/signIn']);
    }).catch(() => {
      this.loading = false;
    });
  }

  openCadastroUsuario() {
    this.apresentaCampos = true;
  }

}