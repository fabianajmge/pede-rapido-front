export class Pedido {
    idItemCardapio: number = 0;
    titulo: string = '';
    preco: number = 0;
    quantidade: number = 0;
    observacao: string = '';
}

export class ListPedido {
    idMesa: number = 0;
    idPedido: number = 0;
    idRestaurante: number = 0;
    status: string = '';
    itensPedido: Pedido[] = [];
    valorTotal: number = 0;
}

export class ObjectListPedido {
    listaPedidos: ListPedido[] = [];
}