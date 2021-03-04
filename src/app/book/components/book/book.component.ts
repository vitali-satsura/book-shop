import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book!: IBook;
  @Output() addBook = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(book: IBook): void {
    this.addBook.emit(book);
  }

}
