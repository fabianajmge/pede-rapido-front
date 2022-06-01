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

  @Output()
  itensSelecionados = new EventEmitter<ItemMenu[]>();

  dataFiltered: ItemMenu[] = [];

  listItemData: ItemMenu[] = [];

  constructor(
    private menuService: MenuService,
    private pedidoService: PedidoService
  ) {
  }

  ngOnInit(): void {
    this.menuService.getItemsMenu(1).pipe(take(1))
    .subscribe({
      next: (list: ItemMenu[]) => {
        this.listItemData = list;
        this.dataFiltered = this.listItemData.filter(i => i.tipo == this.typeSelected);
      },
      error: (error) => console.log(error)
    }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataFiltered = this.listItemData.filter(i => i.tipo == this.typeSelected);
  }

  openAddItem(event: ItemMenu) {
    console.log(event);
  }

  mudouSelecao(event: any) {
    console.log('this.itensSelecionados: ' , this.listItemData);
    this.itensSelecionados.emit(this.listItemData.filter(item => item.checked));
  }

  atualizarInfo() {
    console.log('this.atualizarInfo: ' , this.listItemData);
    this.itensSelecionados.emit(this.listItemData.filter(item => item.checked));
  }
}
