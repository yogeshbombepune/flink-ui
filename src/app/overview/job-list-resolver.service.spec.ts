import { TestBed } from '@angular/core/testing';

import { JobListResolverService } from './job-list-resolver.service';

describe('JobListResolverService', () => {
  let service: JobListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
