import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBudgetEntryComponent } from './delete-budget-entry.component';

describe('DeleteBudgetEntryComponent', () => {
  let component: DeleteBudgetEntryComponent;
  let fixture: ComponentFixture<DeleteBudgetEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBudgetEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBudgetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
