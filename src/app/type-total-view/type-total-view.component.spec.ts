import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTotalViewComponent } from './type-total-view.component';

describe('TypeTotalComponent', () => {
  let component: TypeTotalViewComponent;
  let fixture: ComponentFixture<TypeTotalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTotalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTotalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
