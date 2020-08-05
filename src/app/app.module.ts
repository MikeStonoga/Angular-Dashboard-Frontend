import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DbToolbarModule } from 'src/sdk/db-toolbar/db-toolbar.module';
import { DbSidenavModule } from 'src/sdk/db-sidenav/db-sidenav.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    DbToolbarModule,
    DbSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
