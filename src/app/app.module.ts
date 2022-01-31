import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetEntriesComponent } from './budget-entries/budget-entries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBudgetEntryComponent } from './add-budget-entry/add-budget-entry.component';
import { BudgetEntryViewComponent } from './budget-entry-view/budget-entry-view.component';
import { TypeTotalViewComponent } from './type-total-view/type-total-view.component';
import { BudgetQueryComponent } from './budget-query/budget-query.component';
import { StoreModule } from '@ngrx/store';
import { budgetEntryReducer } from './store/budget-entry.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BudgetEntryEffects } from './store/budget-entry.effect';
import { TypeTotalsComponent } from './type-totals/type-totals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntriesComponent,
    AddBudgetEntryComponent,
    BudgetEntryViewComponent,
    TypeTotalViewComponent,
    BudgetQueryComponent,
    TypeTotalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ budgetEntries: budgetEntryReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    EffectsModule.forRoot([BudgetEntryEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
