import { createReducer, on } from "@ngrx/store";
import { BudgetEntry, Interval, TypeTotal, TypeTotalViewModel } from "../budget-entry";
import * as BudgetEntryActions from './budget-entry.actions';

export interface BudgetEntryState {
    budgetEntries: BudgetEntry[];
    queryInterval: Interval;
    queryDate: Date;
    typeTotals: TypeTotal[];
    typeTotalViewModels: TypeTotalViewModel[],
};

const initialState: BudgetEntryState = {
    budgetEntries: [],
    queryInterval: Interval.Weekly,
    queryDate: new Date(),
    typeTotals: [],
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
    on(BudgetEntryActions.loadTypeTotalsSuccess, (state, action): BudgetEntryState => {
        return {
            ...state,
            typeTotals: action.typeTotals,
        }
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
