import { Router } from '@angular/router';
import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css'],
})
export class OptionsMenuComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signOut(): void {
    this.cognitoService.signOut().then(() => {
      this.isAuthenticated = false;
      this.fecharMenu();
      this.router.navigate(['/login/signIn']);
    });
  }

  public signIn(): void {
    this.cognitoService.signOut().then(() => {
      this.isAuthenticated = true;
      this.fecharMenu();
      this.router.navigate(['/login/signIn']);
    });
  }

  fecharMenu() {
    document.getElementById('navbarNavDropdown')?.classList.remove('show');
  }
}
