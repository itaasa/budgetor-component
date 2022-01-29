import { createAction, props } from '@ngrx/store';
import { BudgetEntry } from '../budget-entry';

export const loadBudgetEntries = createAction(
    `[Budget Entries] Load Budget Entries`
);

export const loadBudgetEntriesSuccess = createAction(
    `[Budget Entries] Load Budget Entries Success`,
    props<{ budgetEntries: BudgetEntry[] }>(),
);
