import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { BudgetEntry } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getBudgetEntries } from '../store/budget-entry.selectors';
import { EditBudgetEntryComponent } from '../edit-budget-entry/edit-budget-entry.component';

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

  public openEditBudgetEntryDialog(budgetEntry : BudgetEntry) : void{
    const editBudgetEntryDialogRef = this.dialog.open(EditBudgetEntryComponent, {
      width: '300px',
      data: budgetEntry,
    });

    editBudgetEntryDialogRef.afterClosed().subscribe(updatedBudgetEntry => {
      console.log(updatedBudgetEntry);
    });
  }
}
