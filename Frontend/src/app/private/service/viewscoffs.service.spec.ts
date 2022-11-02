import { TestBed } from '@angular/core/testing';

import { ViewscoffsService } from './viewscoffs.service';

describe('ViewscoffsService', () => {
  let service: ViewscoffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewscoffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
