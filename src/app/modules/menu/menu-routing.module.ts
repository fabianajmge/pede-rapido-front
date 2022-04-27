import { SecondMenuComponent } from './second-menu/second-menu.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu', component: MainScreenComponent
  },
  {
    path: 'second-menu', component: SecondMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
