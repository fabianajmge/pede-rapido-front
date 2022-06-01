import { HttpParams } from '@angular/common/http';
import { PedidoService } from './../../../pedido/service/pedido.service';
import { ListPedido, Pedido } from './../../../pedido/model/pedido';
import { take } from 'rxjs';
import { ItemMenu } from '../../model/list-item-menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  type: number = 1;
  enviaPedidoDesabilitado = true;
  mesaComPedidoAnterior = false;
  listaPedido: ItemMenu[] = [];
  pedidoEnviado: boolean = false;
  nomeBotao = 'Enviar Pedido';
  listaPedidoEnviar: ListPedido = new ListPedido();
  mesa: number = 0;
  itensPedido: Pedido[] = [];
  quantidadeInvalida = false;
  mesaInvalida = false;

  constructor(private route: ActivatedRoute,
    private pedidoService: PedidoService) {
   }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params['type']) {
          this.type = params['type'];
        }

        if (params['table']) {
          this.mesa = params['table'];
        }
      }
    );
  }

  recuperaItensSelecionados(event: any) {
    this.enviaPedidoDesabilitado = event.length === 0;
    this.listaPedido = event;
  }

  enviaPedido() {
    this.enviaPedidoDesabilitado = true;

    if (this.mesa == 0 || this.mesa == undefined) {
      this.mesaInvalida = true;
    } else {
      this.mesaInvalida = false;
    }

    this.listaPedido.forEach(i => {
      let itemPedido = new Pedido();
      itemPedido.idItemCardapio = i.id;
      itemPedido.observacao = i.observacao;
      itemPedido.quantidade = i.quantidade;
      this.itensPedido.push(itemPedido);

      if (i.quantidade == 0 || i.quantidade == undefined) {
        this.quantidadeInvalida = true;
      } else {
        this.quantidadeInvalida = false;
      }
    });

    if (!this.quantidadeInvalida && !this.mesaInvalida) {
      this.listaPedidoEnviar.idMesa = this.mesa;
      this.listaPedidoEnviar.itensPedido = this.itensPedido;
  
      this.pedidoService.criarPedido(this.listaPedidoEnviar).pipe(take(1))
      .subscribe({
        next : () => {
          this.pedidoEnviado = true,
          this.listaPedidoEnviar = new ListPedido();
        },
        error: () => 
          this.mesaComPedidoAnterior = true
      });
    }
  }

  solicitaConta() {
    this.enviaPedidoDesabilitado = true;

    let params = new HttpParams();
    params = params.append('mesaId', this.mesa);

    this.pedidoService.solicitarConta(params).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

}
