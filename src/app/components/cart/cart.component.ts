import { Component, Input, OnInit } from '@angular/core';
import { ICartBook } from '../../models/cartBook';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: ICartBook[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cartItemCopy(cartItem: ICartBook) {
    return {...cartItem};
  }

  removeBook(cartItem: ICartBook) {
    this.cart = this.cart.filter((item) => item.book.id !== cartItem.book.id);
  }
}
