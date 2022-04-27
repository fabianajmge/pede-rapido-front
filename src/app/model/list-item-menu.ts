export class ItemMenu {
  id: number = 0;
  title: string  = '';
  detail: string = '';
  price: string = '';
  pathImage: string = '';
  checked: boolean = false;
  type: number = 0;
  observacao: string = "";
  quantidade: number = 0;
}

export class ListItemMenu {
  itemMenu: ItemMenu[] = [];
}
