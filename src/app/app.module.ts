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
import { StoreModule } from '@ngrx/store';
import { budgetEntryReducer } from './store/budget.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BudgetEntryEffects } from './store/budget.effect';

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
    StoreModule.forRoot({}),
    StoreModule.forFeature('budgetEntries', budgetEntryReducer),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
