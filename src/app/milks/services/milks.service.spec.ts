import { TestBed } from '@angular/core/testing';

import { MilksService } from './milks.service';

describe('MilksService', () => {
  let service: MilksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
