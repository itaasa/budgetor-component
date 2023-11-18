import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BudgetEntryState } from './budget-entry.reducer';

const getBudgetEntryState =
  createFeatureSelector<BudgetEntryState>('budgetEntries');

export const getBudgetEntries = createSelector(
  getBudgetEntryState,
  (state) => state.budgetEntries
);

export const getTypeTotalViewModels = createSelector(
  getBudgetEntryState,
  (state) => state.typeTotalViewModels
);

export const getQueryDate = createSelector(
  getBudgetEntryState,
  (state) => state.queryDate
);

export const getQueryInterval = createSelector(
  getBudgetEntryState,
  (state) => state.queryInterval
);

export const getIntervalTotal = createSelector(
  getBudgetEntryState,
  (state) => state.intervalTotal
);

export const getAverages = createSelector(
  getBudgetEntryState,
  (state) => state.averages
);
