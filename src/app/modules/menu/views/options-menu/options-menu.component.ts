import { Router, ActivatedRoute } from '@angular/router';
import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css'],
})
export class OptionsMenuComponent implements OnInit {
  isAuthenticated: boolean;
  type: number = 1;
  mesa: number = 0;

  constructor(private cognitoService: CognitoService, private router: Router,
    private route: ActivatedRoute) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });

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
      this.isAuthenticated = false;
      this.router.navigate(['/login/signIn']);
    });
  }

  public signIn(): void {
    this.cognitoService.signOut().then(() => {
      this.isAuthenticated = true;
      this.router.navigate(['/login/signIn']);
    });
  }
}
