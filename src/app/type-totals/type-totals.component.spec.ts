import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTotalsComponent } from './type-totals.component';

describe('TypeTotalsComponent', () => {
  let component: TypeTotalsComponent;
  let fixture: ComponentFixture<TypeTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
