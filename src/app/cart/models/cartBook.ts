import { IBook } from '../../book/models/book';

export interface ICartBook {
  book: IBook;
  count: number;
}
