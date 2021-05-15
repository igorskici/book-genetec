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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    TransformDataPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
