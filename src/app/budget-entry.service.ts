import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BudgetEntry, Interval, TypeTotal } from './budget-entry';

@Injectable({
  providedIn: 'root'
})
export class BudgetEntryService {

  private apiUrl = 'http://localhost:5001/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  
  constructor(private http: HttpClient) { }

  public getBudgetEntries(queryDate: Date, interval: Interval): Observable<BudgetEntry[]> {
    const url = this.apiUrl + `budget-entry?date=${queryDate.toISOString()}&interval=${interval}`;
    return this.http.get<BudgetEntry[]>(url);
  };

  public getTypeTotals(queryDate: Date, interval: Interval): Observable<TypeTotal[]> {
    const url = this.apiUrl + `type-totals?date=${queryDate.toISOString()}&interval=${interval}`;
    return this.http.get<TypeTotal[]>(url);
  }

  public insertBudgetEntry(budgetEntry: BudgetEntry) : Observable<BudgetEntry> {
    const url = this.apiUrl + `budget-entry`;
    return this.http.post<BudgetEntry>(url, budgetEntry, this.httpOptions);
  }
}
