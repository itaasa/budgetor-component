import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Interval } from './budget-entry';
import { BudgetEntryState } from './store/budget-entry.reducer';
import * as BudgetEntryActions from './store/budget-entry.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<BudgetEntryState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      BudgetEntryActions.setQueryDate({ queryDate: new Date() })
    );
    this.store.dispatch(
      BudgetEntryActions.setQueryInterval({ queryInterval: Interval.Weekly })
    );

    this.store.dispatch(BudgetEntryActions.loadBudgetEntries());
    this.store.dispatch(BudgetEntryActions.loadTypeTotalViewModels());
    this.store.dispatch(BudgetEntryActions.loadIntervalTotal());
    this.store.dispatch(
      BudgetEntryActions.loadAverages({ interval: Interval.Weekly })
    );
  }
}
