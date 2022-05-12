import { ListPedido } from './../model/pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = environment.URL_API_PEDIDO;

  constructor(
    private http: HttpClient
  ) { }

  criarPedido(listaPedido: ListPedido): Observable<any> {
    return this.http.post<ListPedido>(`${this.url}/pedido`, listaPedido);
  }

  getPedidoEmAberto(restauranteId: number): Observable<ListPedido[]> {
    return this.http.get<ListPedido[]>(`${this.url}/pedido/emAberto?restauranteId=${restauranteId}`);
  }
}
