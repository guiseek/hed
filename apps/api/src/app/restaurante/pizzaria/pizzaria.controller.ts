import { Controller, Get } from '@nestjs/common';
import { PizzariaService } from './pizzaria.service';

@Controller('pizzaria')
export class PizzariaController {
  constructor(private service: PizzariaService) {}

  @Get('pizzas')
  getPizzas() {
    return this.service.getPizzas();
  }
  @Get('sabores')
  getSabores() {
    return this.service.getSabores();
  }
  @Get('cardapio')
  getCardapio() {
    return this.service.getCardapio();
  }
}
