import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetEntryComponent } from './edit-budget-entry.component';

describe('EditBudgetEntryComponent', () => {
  let component: EditBudgetEntryComponent;
  let fixture: ComponentFixture<EditBudgetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBudgetEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
