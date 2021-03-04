import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookComponent } from './book/components/book/book.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    BookModule,
    CartModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
