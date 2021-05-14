import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewChangesComponent } from './view-changes/view-changes.component';

const routes: Routes = [
  { path: '', component: ViewChangesComponent },
  { path: 'books', component: ViewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
