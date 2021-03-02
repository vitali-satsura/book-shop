import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/book';
import { books } from '../../shared/data/books';
import { ICartBook } from '../../models/cartBook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  cart: ICartBook[] = [];
  allBooksCount = 0;

  constructor() {
    this.books = books;
  }

  ngOnInit(): void {
  }

  addBookToCart(book: IBook) {
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
        // this.cart = [...this.cart, {book, count: 1}];
        console.log('isExist',this.cart);
      }
    } else {
      this.cart.push({book, count: 1});
      // this.cart = [...this.cart, {book, count: 1}];
    }
    console.log(this.cart);
  }
}
