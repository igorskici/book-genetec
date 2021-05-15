import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {

  public data: any[] = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.data = this.booksService.getBooksData();
  }

}
