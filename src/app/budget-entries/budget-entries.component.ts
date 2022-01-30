import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';
import { formatDateToInput } from '../date-formatter';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import * as BudgetEntryActions from '../store/budget-entry.actions'
import { getBudgetEntries, getTypeTotals } from '../store/budget-entry.selectors';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent implements OnInit {
  public budgetEntries$: Observable<BudgetEntry[]>;
  public typeTotals$: Observable<TypeTotal[]>;
  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  
  budgetQueryForm: FormGroup = new FormGroup({
    queryDate: new FormControl(''),
    queryInterval: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>) {
    this.budgetEntries$ = this.store.select(getBudgetEntries);
    this.typeTotals$ = this.store.select(getTypeTotals);                
  }

  ngOnInit(): void {
    this.budgetQueryForm.get('queryDate')?.setValue(formatDateToInput(new Date()));
    this.budgetQueryForm.get('queryInterval')?.setValue(Interval.Weekly);
    
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries({ queryDate: new Date(), queryInterval: Interval.Weekly}));
    this.store.dispatch(BudgetEntryActions.loadTypeTotals( { queryDate: new Date(), queryInterval: Interval.Weekly}));
  }

  onSubmit() {
    let queryDate  = new Date(this.budgetQueryForm.get('queryDate')?.value);
    let queryInterval = this.budgetQueryForm.get('queryInterval')?.value;

    this.store.dispatch(BudgetEntryActions.loadBudgetEntries({ queryDate: queryDate, queryInterval: queryInterval}));
    this.store.dispatch(BudgetEntryActions.loadTypeTotals( { queryDate: queryDate, queryInterval: queryInterval}));
  }
}
