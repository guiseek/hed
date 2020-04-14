import { Sabor } from '@hed/api-interfaces';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'hed-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PedidoComponent {
  @Input()
  sabores: Sabor[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    sabores: this.fb.array([])
  }, {
    validator: (control: AbstractControl): { [key: string]: boolean } => {
      const sabores = (control.get('sabores') as FormArray).value;
      return sabores.length ? null : { noToppings: true };
    }
  });

  constructor(
    private fb: FormBuilder
  ) { }

  get control() {
    return this.form.get('sabores') as FormArray;
  }

  addSabor(topping: Sabor) {
    this.control.push(new FormControl(topping));
  }

  removeSabor(index: number) {
    this.control.removeAt(index);
  }

  selectSabor(topping: Sabor) {
    const index = this.control.value.indexOf(topping);
    if (!!~index) {
      this.removeSabor(index);
    } else {
      this.addSabor(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}