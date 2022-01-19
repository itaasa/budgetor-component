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

  public getBudgetEntries(date: Date, interval: Interval): Observable<BudgetEntry[]> {
    const url = this.apiUrl + 'budget-entry?date=01/16/2022&interval=Weekly';
    return this.http.get<BudgetEntry[]>(url);
  };

  public getTypeTotals(date: Date, interval: Interval): Observable<TypeTotal[]> {
    const url = this.apiUrl + 'type-totals?date=01/16/2022&interval=Weekly';
    return this.http.get<TypeTotal[]>(url);
  }
}
