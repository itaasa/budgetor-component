import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetEntry, BudgetType } from '../budget-entry';

@Component({
  selector: 'app-edit-budget-entry',
  templateUrl: './edit-budget-entry.component.html',
  styleUrls: ['./edit-budget-entry.component.scss']
})
export class EditBudgetEntryComponent implements OnInit{
  budgetEntryForm: FormGroup = new FormGroup({
    itemName: new FormControl(''),
    price: new FormControl(''),
    dateBought: new FormControl(''),
    type: new FormControl(''),
  });

  public budgetTypes = [BudgetType.Want, BudgetType.Need, BudgetType.Gas, BudgetType.Emergency, BudgetType.Groceries, BudgetType.Holiday];
  public budgetEntry: BudgetEntry;

  public constructor(public dialogRef: MatDialogRef<EditBudgetEntryComponent>, @Inject(MAT_DIALOG_DATA) public data: BudgetEntry){
    this.budgetEntry = {
      _id: data._id,
      itemName: data.itemName,
      price: data.price,
      type: data.type,
      dateBought: data.dateBought,
    }
  }

  ngOnInit(): void {
    this.budgetEntryForm.get('itemName')?.setValue(this.budgetEntry.itemName);
    this.budgetEntryForm.get('dateBought')?.setValue(new Date(this.budgetEntry.dateBought));
    this.budgetEntryForm.get('type')?.setValue(this.budgetEntry.type);
    this.budgetEntryForm.get('price')?.setValue(this.budgetEntry.price);
  }

  public onSubmit() : void {
    this.budgetEntry.itemName = this.budgetEntryForm.get('itemName')?.value;
    this.budgetEntry.price = this.budgetEntryForm.get('price')?.value;
    this.budgetEntry.type = this.budgetEntryForm.get('type')?.value;
    this.budgetEntry.dateBought = this.budgetEntryForm.get('dateBought')?.value.toISOString();
  }
}
