import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICartBook } from './models/cartBook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appTitle', {static: false})
  titleName!: ElementRef;

  title = '';
  cart: ICartBook[] = [];
  booksCounter: number = 0;

  ngAfterViewInit() {
    this.titleName.nativeElement.textContent = "Books";
  }

  getCartBooks(cart: ICartBook[]) {
    this.cart = cart;
  }

  getCounter(counter: number) {
    this.booksCounter = counter;
  }
}
