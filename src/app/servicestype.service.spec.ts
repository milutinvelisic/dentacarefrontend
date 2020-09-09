import { TestBed } from '@angular/core/testing';

import { ServicestypeService } from './servicestype.service';

describe('ServicestypeService', () => {
  let service: ServicestypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
