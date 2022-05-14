import { ListPedido } from './../model/pedido';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getPedidoEmAberto(): Observable<ListPedido[]> {
    return this.http.get<ListPedido[]>(`${this.url}/pedido/emAberto`);
  }

  getPedidoEmPreparacao(): Observable<ListPedido[]> {
    return this.http.get<ListPedido[]>(`${this.url}/pedido/emPreparacao`);
  }

  atualizarStatusPedido(params: HttpParams): Observable<any> {
    return this.http.put<any>(`${this.url}/pedido`, params);
  }
}
