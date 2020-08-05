import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSidenavComponent } from './db-sidenav.component';

describe('DbSidenavComponent', () => {
  let component: DbSidenavComponent;
  let fixture: ComponentFixture<DbSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
