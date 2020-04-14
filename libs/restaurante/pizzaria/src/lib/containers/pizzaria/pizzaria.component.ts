import { Component, OnInit } from '@angular/core';
import { Pizza, Sabor } from '@hed/api-interfaces';
import { PizzariaService } from '../../services/pizzaria.service';

@Component({
  selector: 'hed-pizzaria',
  templateUrl: './pizzaria.component.html',
  styleUrls: ['./pizzaria.component.scss']
})
export class PizzariaComponent implements OnInit {

  pizzas$ = this.pizzaService.escolher<Pizza[]>('pizzas');
  sabores$ = this.pizzaService.escolher<Sabor[]>('sabores');

  constructor(
    private pizzaService: PizzariaService
  ) {}

  ngOnInit() {
    this.pizzaService.getCadapio()
      .subscribe()
  }

  addPizza(event: any) {
    this.pizzaService.adicionar(event);
  }

}