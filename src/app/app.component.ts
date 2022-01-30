import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Interval } from './budget-entry';
import { BudgetEntryState } from './store/budget-entry.reducer';
import * as BudgetEntryActions from './store/budget-entry.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store<BudgetEntryState>){}
  
  ngOnInit(): void {
  }
}
