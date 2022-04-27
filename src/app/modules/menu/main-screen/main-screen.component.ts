import { ItemMenu } from './../../../model/list-item-menu';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params['type']) {
          this.type = params['type'];
        }
      }
    );
  }

  recuperaItensSelecionados(event: any) {
    this.enviaPedidoDesabilitado = event.length === 0;
    this.listaPedido = event;
  }

  enviaPedido() {
    console.log('enviaPedido: ', this.listaPedido);
    this.pedidoEnviado = true;
    this.nomeBotao = 'Enviar Pedido Adicional';
  }

  solicitaConta() {
    this.enviaPedidoDesabilitado = true;
  }

}
