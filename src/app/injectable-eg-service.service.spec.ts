import { TestBed } from '@angular/core/testing';

import { InjectableEgServiceService } from './injectable-eg-service.service';

describe('InjectableEgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectableEgServiceService = TestBed.get(InjectableEgServiceService);
    expect(service).toBeTruthy();
  });
});
