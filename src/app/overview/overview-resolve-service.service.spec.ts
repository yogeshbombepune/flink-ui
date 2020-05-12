import { TestBed } from '@angular/core/testing';

import { OverviewResolveServiceService } from './overview-resolve-service.service';

describe('OverviewResolveServiceService', () => {
  let service: OverviewResolveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewResolveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
