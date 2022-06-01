import { RestauranteService } from './../../../login/service/restaurante.service';
import { PedidoService } from './../../../pedido/service/pedido.service';
import { MenuService } from './../../service/menu.service';
import { ListItemMenu, ItemMenu } from '../../model/list-item-menu';
import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'list-card-menu',
  templateUrl: './list-card-menu.component.html',
  styleUrls: ['./list-card-menu.component.css'],
})
export class ListCardMenuComponent implements OnInit, OnChanges {

  @Input()
  typeSelected: number = 1;

  @Input()
  mesa: number = 0;

  @Output()
  itensSelecionados = new EventEmitter<ItemMenu[]>();

  @Input()
  pedidoEnviado: boolean = false;

  dataFiltered: ItemMenu[] = [];

  listItemData: ItemMenu[] = [];

  constructor(
    private menuService: MenuService,
    private restauranteService: RestauranteService
  ) {
  }

  ngOnInit(): void {
    this.restauranteService.getRestauranteMesa(this.mesa)
    .subscribe({
      next: (restaurante: any) => {
        this.menuService.getItemsMenu(restaurante.id).pipe(take(1))
        .subscribe({
          next: (list: ItemMenu[]) => {
            this.listItemData = list;
            this.dataFiltered = this.listItemData.filter(i => i.tipo == this.typeSelected);
          }
        }
        );
      }
    }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataFiltered = this.listItemData.filter(i => i.tipo == this.typeSelected);

    if (this.pedidoEnviado) {
      this.listItemData.forEach(l => {
        l.checked = false;
        l.observacao = "";
        l.quantidade = 0;
      });
    }
  }

  mudouSelecao(event: any) {
    this.itensSelecionados.emit(this.listItemData.filter(item => item.checked));
  }

  atualizarInfo() {
    this.itensSelecionados.emit(this.listItemData.filter(item => item.checked));
  }
}
