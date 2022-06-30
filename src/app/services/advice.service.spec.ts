import { TestBed } from '@angular/core/testing';

import { AdviceService } from './advice.service';

describe('AdviessignalenService', () => {
  let service: AdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
