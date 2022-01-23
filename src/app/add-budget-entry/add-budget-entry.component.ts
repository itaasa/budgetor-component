import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BudgetType } from '../budget-entry'
import { formatDateToInput } from '../date-formatter';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.budgetEntryForm.get('dateBought')?.setValue(formatDateToInput(new Date()));
  }

  onSubmit(): void {

  }
}
