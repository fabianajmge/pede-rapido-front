import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { FilaCozinhaComponent } from './view/fila-cozinha/fila-cozinha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

const routes: Routes = [
  {
    path: 'fila-cozinha', component: FilaCozinhaComponent, canActivateChild: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
