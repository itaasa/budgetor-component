import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { BudgetEntry } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getBudgetEntries } from '../store/budget-entry.selectors';
import * as BudgetEntryActions from '../store/budget-entry.actions';
import { EditBudgetEntryComponent } from '../edit-budget-entry/edit-budget-entry.component';
import { DeleteBudgetEntryComponent } from '../delete-budget-entry/delete-budget-entry.component';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent {
  public budgetEntries$: Observable<BudgetEntry[]>;
  public displayedColumns: string[] = ['itemName', 'price', 'type', 'edit', 'delete'];

  constructor(private store: Store<BudgetEntryState>, private dialog: MatDialog) {
    this.budgetEntries$ = this.store.select(getBudgetEntries);
  }

  public openEditBudgetEntryDialog(budgetEntry : any) : void{
    this.dialog.open(EditBudgetEntryComponent, {
      width: '300px',
      data: {
        id: budgetEntry._id,
        itemName: budgetEntry.itemName,
        price: budgetEntry.price,
        type: budgetEntry.type,
        dateBought: budgetEntry.dateBought,
      }
    });
  }

  public openDeleteBudgetEntryDialog(budgetEntry: any) : void {
    this.dialog.open(DeleteBudgetEntryComponent, {
      width: '300px',
      data: {
        id: budgetEntry._id,
        itemName: budgetEntry.itemName,
        price: budgetEntry.price,
        type: budgetEntry.type,
        dateBought: budgetEntry.dateBought,
      }
    });
  }
}
