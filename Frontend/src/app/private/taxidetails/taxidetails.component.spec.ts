import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxidetailsComponent } from './taxidetails.component';

describe('TaxidetailsComponent', () => {
  let component: TaxidetailsComponent;
  let fixture: ComponentFixture<TaxidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxidetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
