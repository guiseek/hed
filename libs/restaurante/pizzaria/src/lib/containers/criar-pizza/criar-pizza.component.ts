import { Sabor } from '@hed/api-interfaces';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hed-criar-pizza',
  templateUrl: './criar-pizza.component.html',
  styleUrls: ['./criar-pizza.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CriarPizzaComponent {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Sabor[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }
}