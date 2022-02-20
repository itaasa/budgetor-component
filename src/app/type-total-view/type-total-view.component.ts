import { Component, Input, OnInit } from '@angular/core';
import { BudgetType, TypeTotalViewModel } from '../budget-entry';

@Component({
  selector: 'app-type-total-view',
  templateUrl: './type-total-view.component.html',
  styleUrls: ['./type-total-view.component.scss']
})

//TODO: Create ViewModel for this to determine if the type total font text should be coloured
// If total < maxTotal, then GREEN
// If total == maxTotal, then GREY
// If total > maxTotal, then RED
export class TypeTotalViewComponent implements OnInit {
  @Input()
  typeTotal: TypeTotalViewModel = {
    type: BudgetType.Want,
    total: 0,
    maxTotal: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }
}
