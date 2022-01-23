import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BudgetEntry, BudgetType } from '../budget-entry'
import { BudgetEntryService } from '../budget-entry.service';
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

  constructor(private budgetEntriesService: BudgetEntryService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.budgetEntryForm.get('dateBought')?.setValue(formatDateToInput(new Date()));
    this.budgetEntryForm.get('type')?.setValue(BudgetType.Want);
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

    this.budgetEntriesService.insertBudgetEntry(budgetEntry).subscribe((newBudgetEntry) => {
      console.log(`Added new budget entry: ${newBudgetEntry}`);
    })
  }
}
