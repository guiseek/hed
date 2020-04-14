import { Injectable } from '@nestjs/common';
import { Cardapio, Pizza, Sabor } from '@hed/api-interfaces';

@Injectable()
export class PizzariaService {
  getPizzas(): Pizza[] {
    return [
      { name: 'New Yorker', sabores: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
      { name: 'Hot & Spicy', sabores: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
      { name: 'Hawaiian', sabores: ['Ham', 'Pineapple', 'Sweetcorn'] }
    ]
  }
  getSabores(): Sabor[] {
    return [
      'Bacon', 'Pepperoni', 'Mushrooms', 'Herbs',
      'Chicken', 'Pineapple', 'Ham', 'Jalapenos'
    ]
  }
  getCardapio(): Cardapio {
    return {
      pizzas: this.getPizzas(),
      sabores: this.getSabores()
    }
  }
}
