import { TestBed } from '@angular/core/testing';

import { DbToolbarService } from './db-toolbar.service';

describe('DbToolbarService', () => {
  let service: DbToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
