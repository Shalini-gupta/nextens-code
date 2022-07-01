import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdviceService } from './advice.service';

describe('AdviessignalenService', () => {
  let service: AdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(AdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
