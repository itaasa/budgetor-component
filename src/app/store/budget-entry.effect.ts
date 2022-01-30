import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs";
import { BudgetEntryService } from "../budget-entry.service";
import * as BudgetEntryActions from './budget-entry.actions';
import { BudgetEntryState } from "./budget-entry.reducer";
import { getQueryDate, getQueryInterval } from "./budget-entry.selectors";

@Injectable()
export class BudgetEntryEffects {

    constructor(private store: Store<BudgetEntryState>, 
                private actions$: Actions, 
                private budgetEntryService: BudgetEntryService) {}

    loadBudgetEntries$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.loadBudgetEntries),
                withLatestFrom(this.store.select(getQueryDate), this.store.select(getQueryInterval)),
                switchMap(([action, queryDate, queryInterval]) => this.budgetEntryService.getBudgetEntries(queryDate, queryInterval) 
                        .pipe(
                            map(budgetEntries => BudgetEntryActions.loadBudgetEntriesSuccess({ budgetEntries })),
                        )
                    ),
            );
    });

    loadTypeTotals$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.loadTypeTotals),
                withLatestFrom(this.store.select(getQueryDate), this.store.select(getQueryInterval)),
                switchMap(([action, queryDate, queryInterval]) => this.budgetEntryService.getTypeTotals(queryDate, queryInterval)
                        .pipe(
                                map(typeTotals => BudgetEntryActions.loadTypeTotalsSuccess( { typeTotals })),
                            ),
                    ),
            );
    });

    addBudgetEntry$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.addBudgetEntry),
                switchMap(action =>
                        this.budgetEntryService.insertBudgetEntry(action.budgetEntry)
                        .pipe(
                            map(budgetEntry => BudgetEntryActions.addBudgetEntrySuccess( { budgetEntry })),
                        ),
                    )
            );
    });
}
