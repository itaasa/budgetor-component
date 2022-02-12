import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BudgetEntry } from '../budget-entry';

@Component({
  selector: 'app-delete-budget-entry',
  templateUrl: './delete-budget-entry.component.html',
  styleUrls: ['./delete-budget-entry.component.scss']
})
export class DeleteBudgetEntryComponent {

  public budgetEntry: BudgetEntry;

  public constructor(public dialogRef: MatDialogRef<DeleteBudgetEntryComponent>, @Inject(MAT_DIALOG_DATA) public data: BudgetEntry, private store: Store){
    this.budgetEntry = {
      id: data.id,
      itemName: data.itemName,
      price: data.price,
      type: data.type,
      dateBought: data.dateBought,
    }
  }

  public deleteBudgetEntry() : void {
    //TODO: Dispatch the deleteAction here.
  }
}
