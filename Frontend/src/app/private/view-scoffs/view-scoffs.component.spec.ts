import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoffsComponent } from './view-scoffs.component';

describe('ViewScoffsComponent', () => {
  let component: ViewScoffsComponent;
  let fixture: ComponentFixture<ViewScoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScoffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
