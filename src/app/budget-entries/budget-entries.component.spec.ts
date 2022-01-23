import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntriesComponent } from './budget-entries.component';

describe('BudgetEntriesComponent', () => {
  let component: BudgetEntriesComponent;
  let fixture: ComponentFixture<BudgetEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
