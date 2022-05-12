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
  listaPedido: ItemMenu[] = [];
  pedidoEnviado: boolean = false;
  nomeBotao = 'Enviar Pedido';
  listaPedidoEnviar: ListPedido = new ListPedido();
  mesa: number = 0;
  itensPedido: Pedido[] = [];
  itemPedido: Pedido = new Pedido();

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
    this.pedidoEnviado = true;
    this.nomeBotao = 'Enviar Pedido Adicional';

    this.listaPedido.forEach(i => {
      this.itemPedido.idItemCardapio = i.id;
      this.itemPedido.observacao = i.observacao;
      this.itemPedido.quantidade = i.quantidade;
      this.itensPedido.push(this.itemPedido);
    });

    this.listaPedidoEnviar.idMesa = this.mesa;
    this.listaPedidoEnviar.itensPedido = this.itensPedido;

    this.pedidoService.criarPedido(this.listaPedidoEnviar).pipe(take(1))
    .subscribe({
      error: (error) => console.log(error)
    });
  }

  solicitaConta() {
    this.enviaPedidoDesabilitado = true;
  }

}
