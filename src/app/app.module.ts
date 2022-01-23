import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetEntriesComponent } from './budget-entries/budget-entries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBudgetEntryComponent } from './add-budget-entry/add-budget-entry.component';
import { BudgetEntryComponent } from './budget-entry/budget-entry.component';
import { TypeTotalComponent } from './type-total/type-total.component';
import { BudgetQueryComponent } from './budget-query/budget-query.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntriesComponent,
    AddBudgetEntryComponent,
    BudgetEntryComponent,
    TypeTotalComponent,
    BudgetQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
