import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { KeysPipe } from "../pipes";

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements AfterContentChecked {

  @Input()
  public dataSource: any[] = [];

  constructor() { }

  ngAfterContentChecked(): void {
    debugger;
  }

}
