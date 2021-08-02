import { TestBed } from '@angular/core/testing';

import { TranslateSerService } from './translate-ser.service';

describe('TranslateSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateSerService = TestBed.get(TranslateSerService);
    expect(service).toBeTruthy();
  });
});
