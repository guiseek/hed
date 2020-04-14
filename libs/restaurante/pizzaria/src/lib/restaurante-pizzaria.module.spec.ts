import { async, TestBed } from '@angular/core/testing';
import { RestaurantePizzariaModule } from './restaurante-pizzaria.module';

describe('RestaurantePizzariaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestaurantePizzariaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RestaurantePizzariaModule).toBeDefined();
  });
});
