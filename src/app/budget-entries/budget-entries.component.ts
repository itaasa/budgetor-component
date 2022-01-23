import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BudgetEntry, Interval, TypeTotal } from '../budget-entry';
import { BudgetEntryService } from '../budget-entry.service';
import { formatDateForApi } from '../date-formatter';

@Component({
  selector: 'app-budget-entries',
  templateUrl: './budget-entries.component.html',
  styleUrls: ['./budget-entries.component.scss']
})
export class BudgetEntriesComponent implements OnInit {
  public budgetEntries: BudgetEntry[] = [];
  public typeTotals: TypeTotal[] = [];
  public intervals = [Interval.Weekly, Interval.Monthly, Interval.Yearly];
  
  budgetQueryForm: FormGroup = new FormGroup({
    queryDate: new FormControl(''),
    queryInterval: new FormControl(''),
  });

  constructor(private budgetEntriesService: BudgetEntryService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.budgetQueryForm.get('queryInterval')?.setValue(Interval.Weekly);
  }

  onSubmit() {
    let formattedQueryDate  = formatDateForApi(this.budgetQueryForm.get('queryDate')?.value);
    let queryInterval = this.budgetQueryForm.get('queryInterval')?.value;
    
    this.budgetEntriesService.getBudgetEntries(formattedQueryDate, queryInterval)
    .subscribe(budgetEntries => this.budgetEntries = budgetEntries);

    this.budgetEntriesService.getTypeTotals(formattedQueryDate, queryInterval)
    .subscribe(typeTotals => this.typeTotals = typeTotals);
  }
}
