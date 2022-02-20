import { createReducer, on } from "@ngrx/store";
import { BudgetEntry, Interval, TypeTotalViewModel } from "../budget-entry";
import * as BudgetEntryActions from './budget-entry.actions';

export interface BudgetEntryState {
    budgetEntries: BudgetEntry[];
    queryInterval: Interval;
    queryDate: Date;
    typeTotalViewModels: TypeTotalViewModel[],
};

const initialState: BudgetEntryState = {
    budgetEntries: [],
    queryInterval: Interval.Weekly,
    queryDate: new Date(),
    typeTotalViewModels: [],
};

export const budgetEntryReducer = createReducer<BudgetEntryState>(
    initialState,
    on(BudgetEntryActions.loadBudgetEntriesSuccess, (state, action): BudgetEntryState => {
        return {
            ...state,
            budgetEntries: action.budgetEntries,
        };
    }),
    on(BudgetEntryActions.loadTypeTotalViewModelsSuccess, (state, action): BudgetEntryState => {
        return {
            ...state,
            typeTotalViewModels: action.typeTotalViewModels,
        }
    }),
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
);
