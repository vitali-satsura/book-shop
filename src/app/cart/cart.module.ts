import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
