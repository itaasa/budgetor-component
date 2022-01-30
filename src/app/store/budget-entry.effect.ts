import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap, tap } from "rxjs";
import { BudgetEntryService } from "../budget-entry.service";
import * as BudgetEntryActions from './budget-entry.actions';

@Injectable()
export class BudgetEntryEffects {

    constructor(private actions$: Actions, private budgetEntryService: BudgetEntryService) {}

    loadBudgetEntries$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.loadBudgetEntries),
                switchMap(action => 
                    this.budgetEntryService.getBudgetEntries(action.queryDate, action.queryInterval)
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
                switchMap(action =>
                        this.budgetEntryService.getTypeTotals(action.queryDate, action.queryInterval)
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
