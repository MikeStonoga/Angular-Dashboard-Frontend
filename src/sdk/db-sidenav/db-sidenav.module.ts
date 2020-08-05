import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DbSidenavComponent } from './db-sidenav.component';



@NgModule({
  declarations: [
    DbSidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    DbSidenavComponent
  ]
})
export class DbSidenavModule { }
