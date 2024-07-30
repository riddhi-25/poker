import { TestBed } from '@angular/core/testing';

import { ShareFormDataService } from './share-form-data.service';

describe('ShareFormDataService', () => {
  let service: ShareFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
