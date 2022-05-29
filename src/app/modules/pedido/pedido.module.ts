import { AuthInterceptor } from './../../auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { FilaCozinhaComponent } from './view/fila-cozinha/fila-cozinha.component';
import { FilaGarcomComponent } from './view/fila-garcom/fila-garcom.component';


@NgModule({
  declarations: [
    FilaCozinhaComponent,
    FilaGarcomComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ]
})
export class PedidoModule { }
