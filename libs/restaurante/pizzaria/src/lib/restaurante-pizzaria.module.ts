import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CriarPizzaComponent } from './containers/criar-pizza/criar-pizza.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { SaboresComponent } from './components/sabores/sabores.component';
import { PedirComponent } from './components/pedir/pedir.component';
import { SaborComponent } from './components/sabor/sabor.component';
import { JuntarPipe } from './pipes/juntar.pipe';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PizzariaComponent } from './containers/pizzaria/pizzaria.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PizzariaComponent
      }
    ])
  ],
  declarations: [CriarPizzaComponent, PizzaComponent, PizzasComponent, SaboresComponent, PedirComponent, SaborComponent, JuntarPipe, PedidoComponent, PizzariaComponent]
})
export class RestaurantePizzariaModule {}
