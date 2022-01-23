import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetEntryComponent } from './add-budget-entry.component';

describe('AddBudgetEntryComponent', () => {
  let component: AddBudgetEntryComponent;
  let fixture: ComponentFixture<AddBudgetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
