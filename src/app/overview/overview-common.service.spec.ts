import { TestBed } from '@angular/core/testing';

import { OverviewCommonService } from './overview-common.service';

describe('OverviewCommonService', () => {
  let service: OverviewCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
