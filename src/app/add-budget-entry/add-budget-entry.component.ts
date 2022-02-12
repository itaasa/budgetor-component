import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BudgetEntry, BudgetType } from '../budget-entry'
import { BudgetEntryState } from '../store/budget-entry.reducer';
import * as BudgetEntryActions from '../store/budget-entry.actions';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-budget-entry',
  templateUrl: './add-budget-entry.component.html',
  styleUrls: ['./add-budget-entry.component.scss']
})
export class AddBudgetEntryComponent implements OnInit {

  public budgetTypes = [BudgetType.Want, BudgetType.Need, BudgetType.Gas, BudgetType.Emergency, BudgetType.Groceries, BudgetType.Holiday];

  budgetEntryForm: FormGroup = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(''),
    dateBought: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private store: Store<BudgetEntryState>) {
  }

  ngOnInit(): void {
    this.budgetEntryForm.get('dateBought')?.setValue(new Date());
    this.budgetEntryForm.get('type')?.setValue(BudgetType.Want);
    this.budgetEntryForm.get('price')?.setValue('0.00');
  }

  addEvent(event: MatDatepickerInputEvent<Date>){
  }

  onSubmit(): void {
    let itemName = this.budgetEntryForm.get('itemName')?.value;
    let price = this.budgetEntryForm.get('price')?.value;
    let type = this.budgetEntryForm.get('type')?.value;
    let dateBought = this.budgetEntryForm.get('dateBought')?.value;
    
    let budgetEntry: BudgetEntry = {
      itemName: itemName,
      price: price,
      dateBought: dateBought.toISOString(),
      type: type
    }

    this.store.dispatch(BudgetEntryActions.addBudgetEntry( { budgetEntry: budgetEntry } ));
  }
}
