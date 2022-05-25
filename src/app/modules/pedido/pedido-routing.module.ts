import { FilaGarcomComponent } from './view/fila-garcom/fila-garcom.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { FilaCozinhaComponent } from './view/fila-cozinha/fila-cozinha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fila-cozinha', component: FilaCozinhaComponent, canActivateChild: [AuthGuardService],
  },
  {
    path: 'fila-garcom', component: FilaGarcomComponent, canActivateChild: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
