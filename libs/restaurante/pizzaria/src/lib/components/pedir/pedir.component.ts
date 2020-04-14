import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hed-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.scss']
})
export class PedirComponent {

  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
}
