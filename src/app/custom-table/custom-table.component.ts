import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TableService } from '../services/table.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterViewInit {

  private _dataSource: any[] = [];

  @Input()
  public get dataSource(): any[] {
    return this._dataSource;
  }

  public set dataSource(data: any[]) {
    this._dataSource = data || [];
    this.cdr.markForCheck();
  }

  @Input()
  public grouping: boolean = false;

  @Input()
  public editing: boolean = false;

  @ViewChild('table')
  public table: ElementRef;

  @ViewChild('paginator')
  public paginator: ElementRef;

  public tableService: TableService;

  public pages: number[] = [];

  private _perPage: number = 5;

  private _filteringField: any;

  private _filteringCriteria: any;

  private _paging: boolean = false;
  
  @Input()
  public get paging(): boolean {
    return this._paging;
  }

  public set paging(val: boolean) {
    this._paging = val;
    for (var i = 1; i <= Math.round(this.dataSource.length / 5); i++) {
      this.pages.push(i);
    }
  }

  public sortingField: any = 'id';

  // todo: criteria not being applied
  public sortingCriteria: any = 'desc';

  public groupingField: any = 'actions';

  public groupingCriteria: any = 'edit';

  public pipeTrigger = 0;

  private _selectedPage: number = 1;

  constructor(
    public dialog: MatDialog,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dialog?.afterAllClosed.subscribe(() => {
      this.cdr.detectChanges();
      this.pipeTrigger++;
    });
  }

  ngAfterViewInit() {
    if (this.paging) {
      for (var i = 1; i <= Math.round(this.dataSource.length / 5); i++) {
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

  public edit(recordId: number) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      height: '500px',
      data: { recordId, action: 'edit' }
    });
  }

  public delete(recordId: number) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: { recordId, action: 'delete' }
    });
  }

  public get filteringField() {
    return this._filteringField;
  }

  public set filteringField(value: any) {
    this._filteringField = value;
  }

  public get filteringCriteria() {
    return this._filteringCriteria;
  }

  public set filteringCriteria(value: any) {
    this._filteringCriteria = value;
  }

  public get perPage() {
    return this._perPage;
  }

  public set perPage(value: any) {
    this._perPage = value;
  }

}
