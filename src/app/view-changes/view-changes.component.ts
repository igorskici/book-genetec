import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-view-changes',
  templateUrl: './view-changes.component.html',
  styleUrls: ['./view-changes.component.scss']
})
export class ViewChangesComponent implements OnInit {

  public data: any[] = [];
  public columns: any[] = [];
  public filtering = false;
  public paging = false;
  public grouping = false;
  public sorting = false;
  public filterCriteria: string;
  public filteringField: any;


  @ViewChild('table', { read: CustomTableComponent })
  public table: CustomTableComponent;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.data = this.booksService.getChanges();
    this.columns = Object.keys(this.data[0]);
  }

  public filter() {
    this.table.filteringCriteria = this.filterCriteria;
    this.table.filteringField = this.filteringField;
    this.table.cdr.detectChanges();
  }

}
