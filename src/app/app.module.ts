import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

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
import { EditBudgetEntryComponent } from './edit-budget-entry/edit-budget-entry.component';
import { DeleteBudgetEntryComponent } from './delete-budget-entry/delete-budget-entry.component';
import { IntervalTotalComponent } from './interval-total/interval-total.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntriesComponent,
    AddBudgetEntryComponent,
    BudgetEntryViewComponent,
    TypeTotalViewComponent,
    BudgetQueryComponent,
    TypeTotalsComponent,
    EditBudgetEntryComponent,
    DeleteBudgetEntryComponent,
    IntervalTotalComponent,
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
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
