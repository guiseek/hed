import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pizza } from '@hed/api-interfaces';

@Component({
  selector: 'hed-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  @Input()
  pizzas: Pizza[];
}
