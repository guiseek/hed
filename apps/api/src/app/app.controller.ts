import { Message } from '@hed/api-interfaces';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('items')
  getItems(): Message[] {
    return this.appService.messages;
  }

  @Post('items')
  addItem(@Body() data: Message)  {
    return this.appService.addItem(data);
  }
  @Delete('items/:id')
  removeItem(@Param('id') id: number)  {
    return this.appService.removeItem(id);
  }
}
