import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DbSidenavService } from './db-sidenav.service';

@Component({
  selector: 'db-sidenav',
  templateUrl: './db-sidenav.component.html',
  styleUrls: ['./db-sidenav.component.css'],
  providers: [DbSidenavService]
})
export class DbSidenavComponent {
  @ViewChild('drawer', {static: false}) public drawer: MatDrawer;

  public toggleSidenavDisplay() {
    this.drawer.toggle();
  }
}
