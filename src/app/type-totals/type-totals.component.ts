import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, merge, Observable, of } from 'rxjs';
import { TypeTotalViewModel } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import {
  getAverages,
  getTypeTotalViewModels,
} from '../store/budget-entry.selectors';

@Component({
  selector: 'app-type-totals',
  templateUrl: './type-totals.component.html',
  styleUrls: ['./type-totals.component.scss'],
})
export class TypeTotalsComponent implements OnInit {
  public typeTotalViewModels$: Observable<TypeTotalViewModel[]> = of([]);

  constructor(private store: Store<BudgetEntryState>) {}

  ngOnInit(): void {
    this.typeTotalViewModels$ = combineLatest([
      this.store.select(getTypeTotalViewModels),
      this.store.select(getAverages),
    ]).pipe(
      map(([typeTotals, averages]) => {
        const typeTotalViewModels: TypeTotalViewModel[] = [];

        typeTotals.forEach((typeTotal) => {
          const average = averages.find((x) => x.type === typeTotal.type);

          if (average) {
            const newTypeTotal: TypeTotalViewModel = {
              ...typeTotal,
              average: average,
            };

            typeTotalViewModels.push(newTypeTotal);
          }
        });

        return typeTotalViewModels;
      })
    );
  }
}
