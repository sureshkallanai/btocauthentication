import { TestBed } from '@angular/core/testing';

import { UserNameDisplayService } from './user-name-display.service';

describe('UserNameDisplayService', () => {
  let service: UserNameDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
