import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { KeysPipe, StringBeautificationPipe, FilteringPipe } from "../pipes";

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {

  @Input()
  public dataSource: any[] = [];

  public filteringField: any;

  public filteringCriteria: any;

  public sortingField: any = 'id';

  // todo: criteria not being applied
  public sortingCriteria: any = 'desc';

  constructor() { }

}
