import { TestBed } from '@angular/core/testing';

import { LibcoreService } from './libcore.service';

describe('LibcoreService', () => {
  let service: LibcoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibcoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
