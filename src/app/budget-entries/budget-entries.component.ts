import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getBudgetEntries, getTypeTotals } from '../store/budget-entry.selectors';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent {
  public budgetEntries$: Observable<BudgetEntry[]>;
  public typeTotals$: Observable<TypeTotal[]>;

  constructor(private store: Store<BudgetEntryState>) {
    this.budgetEntries$ = this.store.select(getBudgetEntries);
    this.typeTotals$ = this.store.select(getTypeTotals);                
  }
}
