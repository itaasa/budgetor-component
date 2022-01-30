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
export class BudgetQueryComponent implements OnInit {

  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  private readonly initialQueryDate = new Date();
  private readonly initialQueryInterval = Interval.Weekly;
  
  budgetQueryForm: FormGroup = new FormGroup({
    queryDate: new FormControl(''),
    queryInterval: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>) { 
    this.store.select(getQueryDate);
  }

  ngOnInit(): void {
    this.budgetQueryForm.get('queryDate')?.setValue(formatDateToInput(this.initialQueryDate));
    this.budgetQueryForm.get('queryInterval')?.setValue(this.initialQueryInterval);
  
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries({ queryDate: this.initialQueryDate, queryInterval: this.initialQueryInterval}));
    this.store.dispatch(BudgetEntryActions.loadTypeTotals( { queryDate: this.initialQueryDate, queryInterval: this.initialQueryInterval}));
  }

  onSubmit() {
    let queryDate  = new Date(this.budgetQueryForm.get('queryDate')?.value);
    let queryInterval = this.budgetQueryForm.get('queryInterval')?.value;

    this.store.dispatch(BudgetEntryActions.setQueryDate({ queryDate: queryDate}));
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries({ queryDate: queryDate, queryInterval: queryInterval}));
    this.store.dispatch(BudgetEntryActions.loadTypeTotals( { queryDate: queryDate, queryInterval: queryInterval}));
  }
}
