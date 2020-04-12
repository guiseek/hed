import { Message } from '@hed/api-interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  messages: Array<Message> = [
    { message: 'Welcome to 1' },
    { message: 'Welcome to 2' },
    { message: 'Welcome to 3' }
  ];

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getItems() {
    return this.messages;
  }

  addItem(item: Message) {
    return this.messages.push(item);
  }
  removeItem(index: number) {
    return this.messages.splice(index, 1);
  }
}
