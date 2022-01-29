import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BudgetEntryState } from "./budget.reducer";

const getBudgetEntryState = createFeatureSelector<BudgetEntryState>('budgetEntries');

export const getBudgetEntries = createSelector(
    getBudgetEntryState,
    state => state.budgetEntries,
);
