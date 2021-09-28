import { TestBed } from '@angular/core/testing';

import { CollabService } from './collab.service';

describe('CollabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollabService = TestBed.get(CollabService);
    expect(service).toBeTruthy();
  });
});
