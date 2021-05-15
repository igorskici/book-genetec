import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewBooksComponent } from './view-books/view-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewChangesComponent } from './view-changes/view-changes.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { FilteringPipe, GroupingPipe, KeysPipe, PagingPipe, SortingPipe, StringBeautificationPipe, TransformDataPipe } from './pipes';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

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
    SortingPipe,
    PagingPipe,
    GroupingPipe,
    TransformDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
