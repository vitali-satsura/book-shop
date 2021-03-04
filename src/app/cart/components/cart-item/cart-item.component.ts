import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ICartBook } from '../../models/cartBook';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() cartItem!: ICartBook;
  @Output() deleteBook = new EventEmitter<ICartBook>()

  color: string = 'default';
  value: number = 0;
  step: number = 1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('simplechanges', changes)
    console.log('cartItem', this.cartItem);
  }

  ngOnInit(): void {
  }

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color
  }

  incrementValue(step: number = 1): void {
    this.value = this.value + step;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return inputValue <= 0;
  }

  onDelete(cartItem: ICartBook): void {
    this.deleteBook.emit(cartItem);
  }

}
