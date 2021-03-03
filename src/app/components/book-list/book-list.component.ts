import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBook } from '../../models/book';
import { books } from '../../shared/data/books';
import { ICartBook } from '../../models/cartBook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Output() incrementBooks = new EventEmitter<number>();
  @Output() addBook = new EventEmitter<ICartBook[]>();

  books: IBook[];
  cart: ICartBook[] = [];
  allBooksCount = 0;

  constructor() {
    this.books = books;
  }

  ngOnInit(): void {
  }

  addBookToCart(book: IBook) {
    this.allBooksCount++;
    let isExist = false;
    if (this.cart.length) {
      this.cart.forEach((el) => {
        if (el.book.id === book.id) {
          el.count++;
          isExist = true;
        }
      });
      if (!isExist) {
        this.cart.push({book, count: 1});
        console.log('isExist',this.cart);
      }
    } else {
      this.cart.push({book, count: 1});
    }
    console.log(this.cart);
    this.addBook.emit(this.cart);
    this.incrementBooks.emit(this.allBooksCount);
  }
}
