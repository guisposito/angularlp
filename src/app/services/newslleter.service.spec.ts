import { TestBed } from '@angular/core/testing';

import { NewslleterService } from './newslleter.service';

describe('NewslleterService', () => {
  let service: NewslleterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewslleterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
