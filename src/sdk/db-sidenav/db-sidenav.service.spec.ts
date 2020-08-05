import { TestBed } from '@angular/core/testing';

import { DbSidenavService } from './db-sidenav.service';

describe('DbSidenavService', () => {
  let service: DbSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
