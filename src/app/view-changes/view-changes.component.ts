import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-view-changes',
  templateUrl: './view-changes.component.html',
  styleUrls: ['./view-changes.component.scss']
})
export class ViewChangesComponent implements OnInit {

  public data: any[] = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.data = this.booksService.getChanges();
  }

}