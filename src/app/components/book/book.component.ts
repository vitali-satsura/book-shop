import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../../models/book';
import { ICartBook } from '../../models/cartBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book!: IBook;
  @Output() addBook = new EventEmitter<IBook>();
  // cart: ICartBook[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(book: IBook): void {
    // let isExist = false;
    // if (this.cart.length) {
    //   this.cart.forEach((el) => {
    //     if (el.book.id === book.id) {
    //       el.count++;
    //       isExist = true;
    //     }
    //   });
    //   if (!isExist) {
    //     this.cart.push({book, count: 1});
    //     // this.cart = [...this.cart, {book, count: 1}];
    //     console.log('isExist',this.cart);
    //   }
    // } else {
    //   this.cart.push({book, count: 1});
    //   // this.cart = [...this.cart, {book, count: 1}];
    // }
    // console.log(this.cart);
    this.addBook.emit(book);
  }

}
