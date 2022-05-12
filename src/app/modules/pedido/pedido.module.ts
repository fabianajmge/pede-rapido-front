import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { FilaCozinhaComponent } from './view/fila-cozinha/fila-cozinha.component';


@NgModule({
  declarations: [
    FilaCozinhaComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
