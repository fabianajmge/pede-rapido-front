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
  url = environment.URL;

  private FECHADO = 4;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    new WebSocketConnector(
      `${this.url}/socket`,
      '/contaSolicitada',
      this.contaSolicitada.bind(this)
    );

    setTimeout(() => {
      this.start();
    }, 200);
  }

  contaSolicitada(message: any): void {
    console.log('mensagem: ', message);
    this.contaSolicitada = JSON.parse(message.body);
  }

  start() {
    this.pedidoService.getPedidosContaSolicitada().pipe(take(1))
    .subscribe({
      next: (response: any) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  fecharConta(idPedido: number) {
    console.log('event ', idPedido);

    let params = new HttpParams();
    params = params.append('pedidoId', idPedido);
    params = params.append('statusId', this.FECHADO);

    this.pedidoService.atualizarStatusPedido(params).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

}
