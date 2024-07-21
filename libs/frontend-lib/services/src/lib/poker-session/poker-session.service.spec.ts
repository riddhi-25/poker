import { TestBed } from '@angular/core/testing';

import { PokerSessionService } from './poker-session.service';

describe('PokerSessionService', () => {
  let service: PokerSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokerSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
