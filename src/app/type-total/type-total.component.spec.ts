import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTotalComponent } from './type-total.component';

describe('TypeTotalComponent', () => {
  let component: TypeTotalComponent;
  let fixture: ComponentFixture<TypeTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
