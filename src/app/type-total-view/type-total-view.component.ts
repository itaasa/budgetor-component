import { Component, Input, OnInit } from '@angular/core';
import { BudgetType, TypeTotalViewModel } from '../budget-entry';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-type-total-view',
  templateUrl: './type-total-view.component.html',
  styleUrls: ['./type-total-view.component.scss'],
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
  };

  barPercentage = 0;
  barColor: ThemePalette = 'primary';

  constructor() {}

  ngOnInit(): void {
    if (this.typeTotal.maxTotal) {
      this.barPercentage =
        (this.typeTotal.total / this.typeTotal.maxTotal) * 100;
    }

    this.barColor = this.barPercentage > 100 ? 'warn' : 'primary';
  }
}
