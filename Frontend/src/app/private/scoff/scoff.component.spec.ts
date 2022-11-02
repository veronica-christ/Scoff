import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoffComponent } from './scoff.component';

describe('ScoffComponent', () => {
  let component: ScoffComponent;
  let fixture: ComponentFixture<ScoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
