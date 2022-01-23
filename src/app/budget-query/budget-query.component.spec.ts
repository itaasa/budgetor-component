import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetQueryComponent } from './budget-query.component';

describe('BudgetQueryComponent', () => {
  let component: BudgetQueryComponent;
  let fixture: ComponentFixture<BudgetQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
