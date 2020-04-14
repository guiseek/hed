import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juntar'
})
export class JuntarPipe implements PipeTransform {

  transform(value: any) {
    return Array.isArray(value) ? value.join(', ') : value;
  }

}
