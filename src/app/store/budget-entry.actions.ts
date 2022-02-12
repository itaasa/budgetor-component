import { createAction, props } from '@ngrx/store';
import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';

export const setQueryDate = createAction(
    `[Budget Entry] Set Query Date`,
    props<{ queryDate: Date }>(),
);

export const setQueryInterval = createAction(
    `[Budget Entry] Set Interval Date`,
    props<{ queryInterval: Interval }>(),
);

export const loadBudgetEntries = createAction(
    `[Budget Entry] Load Budget Entries`,
);

export const loadBudgetEntriesSuccess = createAction(
    `[Budget Entry] Load Budget Entries Success`,
    props<{ budgetEntries: BudgetEntry[] }>(),
);

export const addBudgetEntry = createAction(
    `[Budget Entry] Add Budget Entry`,
    props<{ budgetEntry: BudgetEntry}>(),
);

export const addBudgetEntrySuccess = createAction(
    `[Budget Entry] Add Budget Entry Success`,
    props<{ budgetEntry: BudgetEntry }>(),
);

export const updateBudgetEntry = createAction(
    `[Budget Entry] Update Budget Entry`,
    props<{ budgetEntry: BudgetEntry }>(),
);

export const updateBudgetEntrySuccess = createAction(
    `[Budget Entry] Update Budget Entry Success`,
    props<{ budgetEntry: BudgetEntry }>(),
);

export const loadTypeTotals = createAction(
    `[Budget Entry] Load Type Totals`,
);

export const loadTypeTotalsSuccess = createAction(
    `[Budget Entry] Load Type Totals Success`,
    props<{ typeTotals: TypeTotal[] }>(),
);
