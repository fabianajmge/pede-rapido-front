import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(l => l.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
