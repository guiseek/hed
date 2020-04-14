import { Sabor } from '@hed/api-interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hed-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent {
  touched = false;

  @Input()
  parent: FormGroup;

  @Input()
  selected: Sabor[];

  @Input()
  sabores: Sabor[];

  @Output()
  select = new EventEmitter<Sabor>();

  get invalid() {
    return (
      this.parent.hasError('noSabors') &&
      this.touched
    );
  }

  exists(sabor: Sabor) {
    return !!~this.selected.indexOf(sabor);
  }

  isActive(sabor: Sabor) {
    return this.exists(sabor);
  }

  onSelect(sabor: Sabor) {
    this.touched = true;
    this.select.emit(sabor);
  }
}
