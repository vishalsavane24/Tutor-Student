import { TestBed } from '@angular/core/testing';

import { AssingmentService } from './assingment.service';

describe('AssingmentService', () => {
  let service: AssingmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssingmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
