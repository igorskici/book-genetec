import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { DialogComponent } from './dialog/dialog.component';
import { FilteringPipe, GroupingPipe, KeysPipe, PagingPipe, SortingPipe, StringBeautificationPipe, TransformDataPipe } from './pipes';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewChangesComponent } from './view-changes/view-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
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
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
