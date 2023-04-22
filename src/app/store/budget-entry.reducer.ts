import { createReducer, on } from '@ngrx/store';
import {
  BudgetEntry,
  Interval,
  IntervalTotal,
  TypeTotalViewModel,
} from '../budget-entry';
import * as BudgetEntryActions from './budget-entry.actions';

export interface BudgetEntryState {
  budgetEntries: BudgetEntry[];
  queryInterval: Interval;
  queryDate: Date;
  typeTotalViewModels: TypeTotalViewModel[];
  intervalTotal: IntervalTotal;
}

const initialIntervalTotal: IntervalTotal = {
  interval: Interval.Weekly,
  spent: 0,
  budget: 0,
  net: 0,
  date: '',
  nonEmergencySpent: 0,
  nonEmergencyNet: 0,
};

const initialState: BudgetEntryState = {
  budgetEntries: [],
  queryInterval: Interval.Weekly,
  queryDate: new Date(),
  typeTotalViewModels: [],
  intervalTotal: initialIntervalTotal,
};

export const budgetEntryReducer = createReducer<BudgetEntryState>(
  initialState,
  on(
    BudgetEntryActions.loadBudgetEntriesSuccess,
    (state, action): BudgetEntryState => {
      return {
        ...state,
        budgetEntries: action.budgetEntries,
      };
    }
  ),
  on(
    BudgetEntryActions.loadTypeTotalViewModelsSuccess,
    (state, action): BudgetEntryState => {
      return {
        ...state,
        typeTotalViewModels: action.typeTotalViewModels,
      };
    }
  ),
  on(BudgetEntryActions.setQueryDate, (state, action): BudgetEntryState => {
    return {
      ...state,
      queryDate: action.queryDate,
    };
  }),
  on(BudgetEntryActions.setQueryInterval, (state, action): BudgetEntryState => {
    return {
      ...state,
      queryInterval: action.queryInterval,
    };
  }),
  on(
    BudgetEntryActions.loadIntervalTotalSuccess,
    (state, action): BudgetEntryState => {
      return {
        ...state,
        intervalTotal: action.intervalTotal,
      };
    }
  )
);
