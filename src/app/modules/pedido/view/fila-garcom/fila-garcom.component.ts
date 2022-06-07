import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { HttpParams } from '@angular/common/http';
import { take } from 'rxjs';
import { WebSocketConnector } from './../../../../websocket/websocketconnector';
import { PedidoService } from './../../service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fila-garcom',
  templateUrl: './fila-garcom.component.html',
  styleUrls: ['./fila-garcom.component.css']
})
export class FilaGarcomComponent implements OnInit {

  pedidosContaSolicitada: any[] = [];
  urlWebSocket = environment.URL_WEBSOCKET;
  idRestaurante: number = 0;

  private FECHADO = 4;

  constructor(
    private pedidoService: PedidoService,
    private cognitoService: CognitoService
  ) { }

  ngOnInit(): void {
    new WebSocketConnector(
      `${this.urlWebSocket}/socket`,
      '/contaSolicitada',
      this.contaSolicitada.bind(this)
    );

    setTimeout(() => {
      this.start();
    }, 200);

    this.cognitoService.getUser()
    .then((user: any) => {
      this.idRestaurante = user.attributes['custom:idRestaurante'];
    });
  }

  contaSolicitada(message: any): void {
    console.log('mensagem: ', message);
    this.pedidosContaSolicitada = JSON.parse(message.body);
    this.pedidosContaSolicitada = this.pedidosContaSolicitada.filter(p => p.idRestaurante == this.idRestaurante);
  }

  start() {
    this.pedidoService.getPedidosContaSolicitada().pipe(take(1))
    .subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  fecharConta(idPedido: number) {
    this.pedidoService.atualizarStatusPedido(idPedido, this.FECHADO).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

}
