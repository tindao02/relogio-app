import { TestBed } from '@angular/core/testing';

import { RelogiosService } from './relogios.service';

describe('RelogiosService', () => {
  let service: RelogiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelogiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
