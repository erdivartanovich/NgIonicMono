import { TestBed } from '@angular/core/testing';

import { UikitwebService } from './uikitweb.service';

describe('UikitwebService', () => {
  let service: UikitwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UikitwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
