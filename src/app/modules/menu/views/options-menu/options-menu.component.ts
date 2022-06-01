import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css'],
})
export class OptionsMenuComponent implements OnInit {
  isAuthenticated: boolean = false;
  type: number = 1;
  mesa: number = 0;

  constructor(private cognitoService: CognitoService, private router: Router,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.verificaAutenticacao();

    let login = document.getElementById('login');
    let logout = document.getElementById('logout');

    if (login && logout) {
      login.removeAttribute('style');
      logout.removeAttribute('style');
      if (this.isAuthenticated) {
        login.style.display = 'none';
        logout.style.display = 'hidden';
      } else {
        login.style.display = 'hidden';
        logout.style.display = 'none';
      }
    } 

    this.route.queryParams
      .subscribe(params => {
        if (params['type']) {
          this.type = params['type'];
        }

        if (params['table']) {
          this.mesa = params['table'];
        }
      }
    );
  }

  public signOut(): void {
    this.cognitoService.signOut().then(() => {
      this.verificaAutenticacao();

    let login = document.getElementById('login');
    let logout = document.getElementById('logout');

      if (login && logout) {
        login.removeAttribute('style');
        logout.removeAttribute('style');
        if (this.isAuthenticated) {
          login.style.display = 'none';
          logout.style.display = 'hidden';
        } else {
          login.style.display = 'hidden';
          logout.style.display = 'none';
        }
      } 
      this.router.navigate(['/login/signIn']);
    });
  }

  private verificaAutenticacao() {
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signIn(): void {
    this.cognitoService.signOut().then(() => {
      this.verificaAutenticacao();
      this.router.navigate(['/login/signIn']);
    });
  }
}
