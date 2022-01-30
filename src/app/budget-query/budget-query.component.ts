import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Interval } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getQueryDate } from '../store/budget-entry.selectors';
import * as BudgetEntryActions from '../store/budget-entry.actions';
import { formatDateToInput } from '../date-formatter';

@Component({
  selector: 'app-budget-query',
  templateUrl: './budget-query.component.html',
  styleUrls: ['./budget-query.component.scss']
})
export class BudgetQueryComponent {

  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  
  public budgetQueryForm: FormGroup = new FormGroup({
    queryDate: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>) { 
    const initialQueryDate = new Date();
    const initialQueryInterval = Interval.Weekly;
    this.budgetQueryForm.get('queryDate')?.setValue(formatDateToInput(initialQueryDate));
    this.budgetQueryForm.get('queryInterval')?.setValue(initialQueryInterval);
  }

  getData(queryInterval: Interval) {
    let queryDate  = new Date(this.budgetQueryForm.get('queryDate')?.value);

    this.store.dispatch(BudgetEntryActions.setQueryDate({ queryDate: queryDate}));
    this.store.dispatch(BudgetEntryActions.setQueryInterval({ queryInterval: queryInterval }));
  
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries());
    this.store.dispatch(BudgetEntryActions.loadTypeTotals());
  }
}
