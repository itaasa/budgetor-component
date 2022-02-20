import { query } from "@angular/animations";
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
                ofType(BudgetEntryActions.loadBudgetEntries, BudgetEntryActions.addBudgetEntrySuccess, BudgetEntryActions.updateBudgetEntrySuccess, BudgetEntryActions.deleteBudgetEntrySuccess),
                withLatestFrom(this.store.select(getQueryDate), this.store.select(getQueryInterval)),
                switchMap(([action, queryDate, queryInterval]) => this.budgetEntryService.getBudgetEntries(queryDate, queryInterval) 
                        .pipe(
                            map(budgetEntries => BudgetEntryActions.loadBudgetEntriesSuccess({ budgetEntries })),
                        )
                    ),
            );
    });
    
    loadTypeTotalViewModels$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.loadTypeTotalViewModels, BudgetEntryActions.addBudgetEntrySuccess, BudgetEntryActions.updateBudgetEntrySuccess, BudgetEntryActions.deleteBudgetEntrySuccess),
                withLatestFrom(this.store.select(getQueryDate), this.store.select(getQueryInterval)),
                switchMap(([action, queryDate, queryInterval]) => this.budgetEntryService.getTypeTotalsViewModels(queryDate, queryInterval)
                    .pipe(
                        map(typeTotalViewModels => BudgetEntryActions.loadTypeTotalViewModelsSuccess( { typeTotalViewModels } )),
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

    editBudgetEntry$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.updateBudgetEntry),
                switchMap(action => 
                    this.budgetEntryService.updateBudgetEntry(action.budgetEntry)
                    .pipe(
                        map(budgetEntry => BudgetEntryActions.updateBudgetEntrySuccess( { budgetEntry })),
                    ),
            ));
    });

    deleteBudgetEntry$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(BudgetEntryActions.deleteBudgetEntry),
                switchMap(action => 
                    this.budgetEntryService.deleteBudgetEntry(action.budgetEntry)
                    .pipe(
                        map(budgetEntry => BudgetEntryActions.deleteBudgetEntrySuccess( { budgetEntry })),
                    ),
            ));
    });
}
