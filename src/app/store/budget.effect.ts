import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { Interval } from "../budget-entry";
import { BudgetEntryService } from "../budget-entry.service";
import * as BudgetEntryActions from './budget.actions';
import { formatDateForApi, formatDateToInput } from '../date-formatter';

@Injectable()
export class BudgetEntryEffects {

    private testDate = formatDateForApi(formatDateToInput(new Date()));
    private testInterval = Interval.Weekly;

    constructor(private actions$: Actions, private budgetEntryService: BudgetEntryService) {}

    loadBudgetEntries$ = createEffect(() => {
        return this.actions$
            .pipe(
                //TODO: need to grab the queryInterval and queryDate now... which means a lot of work on the store.
                // We are just passing in default values for now.
                ofType(BudgetEntryActions.loadBudgetEntries),
                mergeMap(() => this.budgetEntryService.getBudgetEntries(this.testDate, this.testInterval)
                .pipe(
                    tap(budgetEntries => console.log(budgetEntries)),
                    map(budgetEntries => BudgetEntryActions.loadBudgetEntriesSuccess({budgetEntries})),
                ),
            ),
        );
    });
}