import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnoComponent } from './regno.component';

describe('RegnoComponent', () => {
  let component: RegnoComponent;
  let fixture: ComponentFixture<RegnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
