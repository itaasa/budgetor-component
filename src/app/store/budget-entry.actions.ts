import { createAction, props } from '@ngrx/store';
import {
  Average,
  BudgetEntry,
  Interval,
  IntervalTotal,
  TypeTotalViewModel,
} from '../budget-entry';

export const setQueryDate = createAction(
  `[Budget Entry] Set Query Date`,
  props<{ queryDate: Date }>()
);

export const setQueryInterval = createAction(
  `[Budget Entry] Set Interval Date`,
  props<{ queryInterval: Interval }>()
);

export const loadBudgetEntries = createAction(
  `[Budget Entry] Load Budget Entries`
);

export const loadBudgetEntriesSuccess = createAction(
  `[Budget Entry] Load Budget Entries Success`,
  props<{ budgetEntries: BudgetEntry[] }>()
);

export const addBudgetEntry = createAction(
  `[Budget Entry] Add Budget Entry`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const addBudgetEntrySuccess = createAction(
  `[Budget Entry] Add Budget Entry Success`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const updateBudgetEntry = createAction(
  `[Budget Entry] Update Budget Entry`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const updateBudgetEntrySuccess = createAction(
  `[Budget Entry] Update Budget Entry Success`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const deleteBudgetEntry = createAction(
  `[Budget Entry] Delete Budget Entry`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const deleteBudgetEntrySuccess = createAction(
  `[Budget Entry] Delete Budget Entry Success`,
  props<{ budgetEntry: BudgetEntry }>()
);

export const loadTypeTotalViewModels = createAction(
  `[Budget Entry] Load Type Total View Models`
);

export const loadTypeTotalViewModelsSuccess = createAction(
  `[Budget Entry] Load Type Total View Models Success`,
  props<{ typeTotalViewModels: TypeTotalViewModel[] }>()
);

export const loadIntervalTotal = createAction(
  `[Budget Entry] Load Interval Total`
);

export const loadIntervalTotalSuccess = createAction(
  `[Budget Entry] Load Interval Total Success`,
  props<{ intervalTotal: IntervalTotal }>()
);

export const loadAverages = createAction(
  `[Budget Entry] Load Averages`,
  props<{ interval: Interval }>()
);

export const loadAveragesSuccess = createAction(
  `[Budget Entry] Load Averages Success`,
  props<{ averages: Average[] }>()
);
