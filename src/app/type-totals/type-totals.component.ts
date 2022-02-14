import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TypeTotalViewModel } from '../budget-entry';
import { BudgetEntryState } from '../store/budget-entry.reducer';
import { getTypeTotalViewModels } from '../store/budget-entry.selectors';

@Component({
  selector: 'app-type-totals',
  templateUrl: './type-totals.component.html',
  styleUrls: ['./type-totals.component.scss']
})
export class TypeTotalsComponent implements OnInit {

  public typeTotalViewModels$: Observable<TypeTotalViewModel[]>;

  constructor(private store: Store<BudgetEntryState>) {
    this.typeTotalViewModels$ = this.store.select(getTypeTotalViewModels);  
  }

  ngOnInit(): void {
  }
}
