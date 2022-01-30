import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BudgetEntry, BudgetType } from '../budget-entry'
import { formatDateToInput } from '../date-formatter';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import * as BudgetEntryActions from '../store/budget-entry.actions';

@Component({
  selector: 'app-add-budget-entry',
  templateUrl: './add-budget-entry.component.html',
  styleUrls: ['./add-budget-entry.component.scss']
})
export class AddBudgetEntryComponent implements OnInit {

  budgetTypes = [BudgetType.Want, BudgetType.Need, BudgetType.Gas, BudgetType.Emergency, BudgetType.Groceries, BudgetType.Holiday];

  budgetEntryForm: FormGroup = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(''),
    dateBought: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>) {}

  ngOnInit(): void {
    this.budgetEntryForm.get('dateBought')?.setValue(formatDateToInput(new Date()));
    this.budgetEntryForm.get('type')?.setValue(BudgetType.Want);
    this.budgetEntryForm.get('price')?.setValue('0.00');
  }

  onSubmit(): void {
    let itemName = this.budgetEntryForm.get('itemName')?.value;
    let price = this.budgetEntryForm.get('price')?.value;
    let type = this.budgetEntryForm.get('type')?.value;
    let dateBought = new Date(this.budgetEntryForm.get('dateBought')?.value);
    dateBought.setUTCHours(12, 0, 0, 0);
    
    let budgetEntry: BudgetEntry = {
      itemName: itemName,
      price: price,
      dateBought: dateBought.toISOString(),
      type: type
    }

    this.store.dispatch(BudgetEntryActions.addBudgetEntry( { budgetEntry: budgetEntry } ));
  }
}
