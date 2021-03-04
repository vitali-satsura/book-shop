import { NgModule } from '@angular/core';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BookComponent,
    BookListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }
