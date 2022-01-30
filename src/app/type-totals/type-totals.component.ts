import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TypeTotal } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getTypeTotals } from '../store/budget-entry.selectors';

@Component({
  selector: 'app-type-totals',
  templateUrl: './type-totals.component.html',
  styleUrls: ['./type-totals.component.scss']
})
export class TypeTotalsComponent implements OnInit {

  public typeTotals$: Observable<TypeTotal[]>;

  constructor(private store: Store<BudgetEntryState>) {
    this.typeTotals$ = this.store.select(getTypeTotals);  
  }

  ngOnInit(): void {
  }
}
