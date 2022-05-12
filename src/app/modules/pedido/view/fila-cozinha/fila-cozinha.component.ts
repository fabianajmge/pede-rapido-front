import { take } from 'rxjs';
import { ListPedido } from './../../model/pedido';
import { PedidoService } from './../../service/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila-cozinha',
  templateUrl: './fila-cozinha.component.html',
  styleUrls: ['./fila-cozinha.component.css']
})
export class FilaCozinhaComponent implements OnInit {

  listItemPedido: ListPedido[] = [];

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.pedidoService.getPedidoEmAberto(2).pipe(take(1))
    .subscribe({
      next: (list: ListPedido[]) => {
        this.listItemPedido = list;
      },
      error: (error) => console.log(error)
    });
  }

}
