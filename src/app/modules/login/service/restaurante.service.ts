import { Restaurante } from './../model/restaurante';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  url = environment.URL_API_PEDIDO;

  constructor(
    private http: HttpClient
  ) { }

  getRestaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${this.url}/restaurante/restaurantes`);
  }
}
