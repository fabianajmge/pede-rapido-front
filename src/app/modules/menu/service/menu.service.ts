import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemMenu } from '../model/list-item-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = environment.URL_API_PEDIDO;

  constructor(
    private http: HttpClient
  ) { }

  getItemsMenu(restauranteId: number): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(`${this.url}/cardapio/${restauranteId}`);
  }
}
