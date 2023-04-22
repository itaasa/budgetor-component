import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTotalComponent } from './interval-total.component';

describe('IntervalTotalComponent', () => {
  let component: IntervalTotalComponent;
  let fixture: ComponentFixture<IntervalTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
