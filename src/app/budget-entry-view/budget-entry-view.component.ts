import { Component, Input } from '@angular/core';
import { BudgetEntry, BudgetType } from '../budget-entry';

@Component({
  selector: 'app-budget-entry-view',
  templateUrl: './budget-entry-view.component.html',
  styleUrls: ['./budget-entry-view.component.scss']
})
export class BudgetEntryViewComponent {
  @Input()
  budgetEntry!: BudgetEntry;
}
