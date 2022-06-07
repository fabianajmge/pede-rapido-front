import { CognitoService } from 'src/app/modules/login/service/cognito.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { WebSocketConnector } from './../../../../websocket/websocketconnector';
import { take } from 'rxjs';
import { PedidoService } from './../../service/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila-cozinha',
  templateUrl: './fila-cozinha.component.html',
  styleUrls: ['./fila-cozinha.component.css']
})
export class FilaCozinhaComponent implements OnInit {

  pedidosEmAberto: any[] = [];
  pedidosEmPreparacao: any[] = [];
  idRestaurante: number = 0;

  private EM_PREPARACAO = 1;
  private PREPARO_FINALIZADO = 2;

  url = environment.URL_API_PEDIDO;
  urlWebSocket = environment.URL_WEBSOCKET;

  constructor(
    private pedidoService: PedidoService,
    private cognitoService: CognitoService
  ) { }

  ngOnInit(): void {
    new WebSocketConnector(
      `${this.urlWebSocket}/socket`,
      '/emAberto',
      this.emAberto.bind(this)
    );

    new WebSocketConnector(
      `${this.urlWebSocket}/socket`,
      '/emPreparacao',
      this.emPreparacao.bind(this)
    );

    setTimeout(() => {
      this.start();
    }, 600);

    this.cognitoService.getUser()
    .then((user: any) => {
      this.idRestaurante = user.attributes['custom:idRestaurante'];
    });
  }

  start() {
    this.pedidoService.getPedidoEmAberto().pipe(take(1))
    .subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });

    this.pedidoService.getPedidoEmPreparacao().pipe(take(1))
    .subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  emAberto(message: any): void {
    console.log('mensagem: ', message);
    this.pedidosEmAberto = JSON.parse(message.body);
    this.pedidosEmAberto = this.pedidosEmAberto.filter(p => p.idRestaurante == this.idRestaurante);
  }

  emPreparacao(message: any): void {
    console.log('mensagem: ', message);
    this.pedidosEmPreparacao = JSON.parse(message.body);
    this.pedidosEmPreparacao = this.pedidosEmPreparacao.filter(p => p.idRestaurante == this.idRestaurante);
  }

  iniciarPreparacao(idPedido: number) {
    this.pedidoService.atualizarStatusPedido(idPedido, this.EM_PREPARACAO).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

  finalizarPreparacao(idPedido: number) {
    this.pedidoService.atualizarStatusPedido(idPedido, this.PREPARO_FINALIZADO).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

}
