import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { SecondMenuComponent } from './views/second-menu/second-menu.component';
import { MainScreenComponent } from './views/main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu', component: MainScreenComponent
  },
  {
    path: 'second-menu', component: SecondMenuComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
