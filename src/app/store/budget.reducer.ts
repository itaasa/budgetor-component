import { createReducer, on } from "@ngrx/store";
import { BudgetEntry, BudgetType, Interval, TypeTotal } from "../budget-entry";
import * as BudgetorActions from './budget.actions';

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
    on(BudgetorActions.loadBudgetEntriesSuccess, (state, action): BudgetEntryState => {
        return {
            ...state,
            budgetEntries: action.budgetEntries,
        };
    }),
);
