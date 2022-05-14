export class Pedido {
    idItemCardapio: number = 0;
    titulo: string = '';
    quantidade: number = 0;
    observacao: string = '';
}

export class ListPedido {
    idMesa: number = 0;
    idPedido: number = 0;
    status: string = '';
    itensPedido: Pedido[] = [];
}

export class ObjectListPedido {
    listaPedidos: ListPedido[] = [];
}