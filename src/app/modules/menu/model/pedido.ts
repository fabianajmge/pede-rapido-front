export class Pedido {
    idItemCardapio: number = 0;
    quantidade: number = 0;
    observacao: string = '';
}

export class ListPedido {
    idMesa: number = 0;
    itensPedido: Pedido[] = [];
}