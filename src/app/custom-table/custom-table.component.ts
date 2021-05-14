import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { KeysPipe, StringBeautificationPipe, FilteringPipe } from "../pipes";

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements AfterContentChecked {

  @Input()
  public dataSource: any[] = [];

  public field: any = 'authors';

  public criteria: any = 'John';

  constructor() { }

  ngAfterContentChecked(): void {
    debugger;
  }

}
