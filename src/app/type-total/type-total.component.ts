import { Component, Input, OnInit } from '@angular/core';
import { BudgetType, TypeTotal } from '../budget-entry';

@Component({
  selector: 'app-type-total',
  templateUrl: './type-total.component.html',
  styleUrls: ['./type-total.component.scss']
})
export class TypeTotalComponent implements OnInit {
  @Input()
  typeTotal: TypeTotal = {
    type: BudgetType.Gas,
    total: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }
}
