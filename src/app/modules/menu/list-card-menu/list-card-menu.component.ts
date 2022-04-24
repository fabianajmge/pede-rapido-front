import { ItemMenu } from './../../../model/list-item-menu';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-card-menu',
  templateUrl: './list-card-menu.component.html',
  styleUrls: ['./list-card-menu.component.css'],
})
export class ListCardMenuComponent implements OnInit, OnChanges {

  @Input()
  typeSelected: number = 1;

  dataFiltered: ItemMenu[] = [];

  listItemData = [
    {
      id: 1,
      title: 'Novo Lanche Mix Mac',
      detail:
        'Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra',
      price: 'R$ 25,00',
      pathImage: 'assets/img/hamburguer.jpg',
      checked: false,
      type: 1
    },
    {
      id: 2,
      title: 'Novo Lanche Mix Mac',
      detail:
        'Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra',
      price: 'R$ 25,00',
      pathImage: 'assets/img/hamburguer.jpg',
      checked: false,
      type: 1
    },
    {
      id: 3,
      title: 'Novo Bebida Mix Mac',
      detail:
        'Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra',
      price: 'R$ 25,00',
      pathImage: 'assets/img/hamburguer.jpg',
      checked: false,
      type: 2
    },
    {
      id: 4,
      title: 'Novo Sobremesa Mix Mac',
      detail:
        'Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra',
      price: 'R$ 25,00',
      pathImage: 'assets/img/hamburguer.jpg',
      checked: false,
      type: 3
    },
    {
      id: 5,
      title: 'Novo Sobremesa Mix Mac',
      detail:
        'Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra Mix Mac 1 hamburguer 150g alcatra',
      price: 'R$ 25,00',
      pathImage: 'assets/img/hamburguer.jpg',
      checked: false,
      type: 3
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataFiltered = this.listItemData.filter(i => i.type == this.typeSelected);
  }

  openAddItem(event: ItemMenu) {
    console.log(event);
  }

  mudouSelecao(event: any) {
    console.log(event.target);

    console.log(this.listItemData.filter(item => item.checked));
  }
}
