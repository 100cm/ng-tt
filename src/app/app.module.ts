import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtModule } from 'at-ng';
import { TtDataTableModule, TtI18nModule, zhCN } from '../../publish';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: '', component: AppComponent}]),
    TtI18nModule.forRoot(zhCN),
    TtDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
