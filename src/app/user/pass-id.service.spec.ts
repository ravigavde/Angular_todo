import { TestBed } from '@angular/core/testing';

import { PassIdService } from './pass-id.service';

describe('PassIdService', () => {
  let service: PassIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
