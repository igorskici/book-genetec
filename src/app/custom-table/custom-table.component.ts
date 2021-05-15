import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements AfterViewInit {

  @Input()
  public dataSource: any[] = [];

  @Input()
  public paging: boolean = false;

  @Input()
  public grouping: boolean = false;

  @ViewChild('table')
  public table: ElementRef;

  @ViewChild('paginator]')
  public paginator: ElementRef;

  public pages: number[] = [];

  public filteringField: any;

  public filteringCriteria: any;

  public sortingField: any = 'id';

  // todo: criteria not being applied
  public sortingCriteria: any = 'desc';

  public groupingField: any = 'authors';

  public groupingCriteria: any = 'John Roman';

  public pipeTrigger = 0;

  private _selectedPage: number = 1;

  constructor() { }

  ngAfterViewInit() {
    if (this.paging) {
      for (var i = 1; i <= Math.round(this.dataSource.length / 2); i++) {
        this.pages.push(i);
      }
    }
  }

  public get selectedPage() {
    return this._selectedPage;
  }
  
  public set selectedPage(val) {
    this._selectedPage = val;
    this.pipeTrigger++;
  }

}
