import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry, BudgetType } from '../budget-entry';

@Component({
  selector: 'app-budget-entry',
  templateUrl: './budget-entry.component.html',
  styleUrls: ['./budget-entry.component.scss']
})
export class BudgetEntryComponent implements OnInit {
  @Input()
  budgetEntry: BudgetEntry = {
    itemName: '',
    price: 0,
    dateBought: '',
    type: BudgetType.Want,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
