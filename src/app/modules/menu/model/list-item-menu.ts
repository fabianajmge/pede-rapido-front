export class ItemMenu {
  id: number = 0;
  titulo: string  = '';
  detalhe: string = '';
  preco: string = '';
  checked: boolean = false;
  tipo: number = 0;
  observacao: string = "";
  quantidade: number = 0;
}

export class ListItemMenu {
  itemMenu: ItemMenu[] = [];
}
