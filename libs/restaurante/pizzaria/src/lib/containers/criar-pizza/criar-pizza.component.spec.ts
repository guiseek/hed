import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPizzaComponent } from './criar-pizza.component';

describe('CriarPizzaComponent', () => {
  let component: CriarPizzaComponent;
  let fixture: ComponentFixture<CriarPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
