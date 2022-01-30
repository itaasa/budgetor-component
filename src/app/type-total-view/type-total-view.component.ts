import { Component, Input, OnInit } from '@angular/core';
import { BudgetType, TypeTotal } from '../budget-entry';

@Component({
  selector: 'app-type-total-view',
  templateUrl: './type-total-view.component.html',
  styleUrls: ['./type-total-view.component.scss']
})
export class TypeTotalViewComponent implements OnInit {
  @Input()
  typeTotal: TypeTotal = {
    type: BudgetType.Want,
    total: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }
}
