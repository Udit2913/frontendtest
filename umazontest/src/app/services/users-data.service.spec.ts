import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersDataService } from './users-data.service';

describe('UserDataService', () => {
  let service: UsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
