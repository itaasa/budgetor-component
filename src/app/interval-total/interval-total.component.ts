import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IntervalTotal } from '../budget-entry';
import {
  getIntervalTotal,
  getQueryDate,
} from '../store/budget-entry.selectors';

@Component({
  selector: 'app-interval-total',
  templateUrl: './interval-total.component.html',
  styleUrls: ['./interval-total.component.scss'],
})
export class IntervalTotalComponent implements OnInit {
  intervalTotal$: Observable<IntervalTotal>;
  queryDate$: Observable<Date>;

  constructor(private readonly store: Store) {
    this.intervalTotal$ = this.store.select(getIntervalTotal);
    this.queryDate$ = this.store.select(getQueryDate);
  }

  ngOnInit(): void {}
}
