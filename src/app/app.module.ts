import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBooksComponent } from './view-books/view-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewChangesComponent } from './view-changes/view-changes.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { FilteringPipe, KeysPipe, SortingPipe, StringBeautificationPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    EditBookComponent,
    ViewChangesComponent,
    CustomTableComponent,
    KeysPipe,
    StringBeautificationPipe,
    FilteringPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
