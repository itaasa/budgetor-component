import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Interval } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import * as BudgetEntryActions from '../store/budget-entry.actions';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-budget-query',
  templateUrl: './budget-query.component.html',
  styleUrls: ['./budget-query.component.scss']
})
export class BudgetQueryComponent {

  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  public queryDate: Date;

  constructor(private store: Store<BudgetEntryState>) {
    this.queryDate = new Date();
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
    this.queryDate = event.value as Date;
  }

  getData(queryInterval: Interval) {
    this.store.dispatch(BudgetEntryActions.setQueryDate({ queryDate: this.queryDate}));
    this.store.dispatch(BudgetEntryActions.setQueryInterval({ queryInterval: queryInterval }));
  
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries());
    this.store.dispatch(BudgetEntryActions.loadTypeTotalViewModels());
  }
}
