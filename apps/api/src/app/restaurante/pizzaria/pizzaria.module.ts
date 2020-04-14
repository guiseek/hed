import { Module } from '@nestjs/common';
import { PizzariaController } from './pizzaria.controller';
import { PizzariaService } from './pizzaria.service';

@Module({
  controllers: [PizzariaController],
  providers: [PizzariaService]
})
export class PizzariaModule {}
