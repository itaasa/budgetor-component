import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryViewComponent } from './budget-entry-view.component';

describe('BudgetEntryComponent', () => {
  let component: BudgetEntryViewComponent;
  let fixture: ComponentFixture<BudgetEntryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
