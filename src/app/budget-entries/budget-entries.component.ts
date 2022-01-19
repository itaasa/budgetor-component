import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';
import { BudgetEntryService } from '../budget-entry.service';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent implements OnInit {
  public budgetEntries: BudgetEntry[] = [];
  public typeTotals: TypeTotal[] = [];
  public currentDate = this.getCurrentDateFormated();
  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  public selectedInterval : any;

  constructor(private budgetEntriesService: BudgetEntryService) {
  }

  ngOnInit(): void {
  }

  onSubmit(inputDateString: string){
    const queryDate = new Date(inputDateString);

    this.budgetEntriesService.getBudgetEntries(queryDate, Interval.Weekly)
    .subscribe(budgetEntries => this.budgetEntries = budgetEntries);

    this.budgetEntriesService.getTypeTotals(queryDate, Interval.Weekly)
    .subscribe(typeTotals => this.typeTotals = typeTotals);
  }

  getCurrentDateFormated(): string {
      let d = new Date();
      const month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
      const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
      return `${d.getFullYear()}-${month}-${day}`;
  }
}
