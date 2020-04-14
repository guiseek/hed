import { HttpClient } from '@angular/common/http';
import { Cardapio, Pizza } from '@hed/api-interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {
  private pedido = new BehaviorSubject<Cardapio>({ pizzas: [], sabores: [] });
  public store = this.pedido.asObservable();

  constructor(private http: HttpClient) { }

  getCadapio() {
    return this.http.get<Cardapio>('/api/pizzaria/cardapio')
      .pipe(tap(cardapio => {
        this.pedido.next(cardapio)
      }))
  }
  escolher<T>(item: string): Observable<T> {
    return this.store.pipe(pluck(item));
  }
  adicionar(pizza: Pizza) {
    const value = this.pedido.value;
    this.pedido.next({ ...value, pizzas: [...value.pizzas, pizza] });
  }
}
