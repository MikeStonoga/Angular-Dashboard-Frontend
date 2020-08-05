import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbToolbarModule } from './db-toolbar/db-toolbar.module';
import { DbSidenavModule } from './db-sidenav/db-sidenav.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DbToolbarModule,
    DbSidenavModule
  ],
  exports: [
    DbToolbarModule,
    DbSidenavModule
  ]
})
export class SdkModule { }
