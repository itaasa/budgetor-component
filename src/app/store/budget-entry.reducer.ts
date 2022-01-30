import { createReducer, on } from "@ngrx/store";
import { BudgetEntry, Interval, TypeTotal } from "../budget-entry";
import * as BudgetEntryActions from './budget-entry.actions';

export interface BudgetEntryState {
    budgetEntries: BudgetEntry[];
    queryInterval: Interval;
    queryDate: Date;
    typeTotals: TypeTotal[];
};

const initialState: BudgetEntryState = {
    budgetEntries: [],
    queryInterval: Interval.Weekly,
    queryDate: new Date(),
    typeTotals: []
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
);
