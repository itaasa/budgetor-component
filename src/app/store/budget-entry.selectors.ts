import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BudgetEntryState } from "./budget-entry.reducer";

const getBudgetEntryState = createFeatureSelector<BudgetEntryState>('budgetEntries');

export const getBudgetEntries = createSelector(
    getBudgetEntryState,
    state => state.budgetEntries,
);

export const getTypeTotals = createSelector(
    getBudgetEntryState,
    state => state.typeTotals,
);

