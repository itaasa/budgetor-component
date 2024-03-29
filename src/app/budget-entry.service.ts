import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {
  Average,
  BudgetEntry,
  Interval,
  IntervalTotal,
  TypeTotalViewModel,
} from './budget-entry';

@Injectable({
  providedIn: 'root',
})
export class BudgetEntryService {
  private apiUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public getBudgetEntries(
    queryDate: Date,
    interval: Interval
  ): Observable<BudgetEntry[]> {
    const url =
      this.apiUrl +
      `budget-entry?date=${queryDate.toISOString()}&interval=${interval}`;
    return this.http.get<BudgetEntry[]>(url);
  }

  public getTypeTotalsViewModels(
    queryDate: Date,
    interval: Interval
  ): Observable<TypeTotalViewModel[]> {
    const url =
      this.apiUrl +
      `type-total?date=${queryDate.toISOString()}&interval=${interval}`;
    return this.http.get<TypeTotalViewModel[]>(url);
  }

  public getIntervalTotal(
    queryDate: Date,
    interval: Interval
  ): Observable<IntervalTotal> {
    const url =
      this.apiUrl +
      `interval-total?date=${queryDate.toISOString()}&interval=${interval}`;
    return this.http.get<IntervalTotal>(url);
  }

  public insertBudgetEntry(budgetEntry: BudgetEntry): Observable<BudgetEntry> {
    const url = this.apiUrl + `budget-entry`;
    return this.http.post<BudgetEntry>(url, budgetEntry, this.httpOptions);
  }

  public updateBudgetEntry(budgetEntry: BudgetEntry): Observable<BudgetEntry> {
    const url = this.apiUrl + `budget-entry/${budgetEntry._id}`;
    return this.http.put<BudgetEntry>(url, budgetEntry, this.httpOptions);
  }

  public deleteBudgetEntry(budgetEntry: BudgetEntry): Observable<BudgetEntry> {
    const url = `${this.apiUrl}budget-entry/${budgetEntry._id}`;
    return this.http.delete<BudgetEntry>(url, this.httpOptions);
  }

  public getAverage(interval: Interval): Observable<Average[]> {
    const url = `${this.apiUrl}average?interval=${interval}`;
    return this.http.get<Average[]>(url, this.httpOptions);
  }
}
