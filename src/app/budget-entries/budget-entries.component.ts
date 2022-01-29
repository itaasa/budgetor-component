import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';
import { BudgetEntryService } from '../budget-entry.service';
import { formatDateForApi, formatDateToInput } from '../date-formatter';
import { BudgetEntryState } from '../store/budget.reducer';
import * as BudgetEntryActions from '../store/budget.actions'
import { getBudgetEntries } from '../store/budget.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent implements OnInit {
  public budgetEntries$: Observable<BudgetEntry[]> | undefined;
  public typeTotals: TypeTotal[] = [];
  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  
  budgetQueryForm: FormGroup = new FormGroup({
    queryDate: new FormControl(''),
    queryInterval: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>, private budgetEntriesService: BudgetEntryService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.budgetQueryForm.get('queryDate')?.setValue(formatDateToInput(new Date()));
    this.budgetQueryForm.get('queryInterval')?.setValue(Interval.Weekly);
    
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries());
    // this.budgetEntries$ = this.store.select(getBudgetEntries);    
  }

  onSubmit() {
    let formattedQueryDate  = formatDateForApi(this.budgetQueryForm.get('queryDate')?.value);
    let queryInterval = this.budgetQueryForm.get('queryInterval')?.value;
    
    this.store.dispatch(BudgetEntryActions.loadBudgetEntries())

    this.budgetEntriesService.getTypeTotals(formattedQueryDate, queryInterval)
    .subscribe(typeTotals => this.typeTotals = typeTotals);
  }
}
