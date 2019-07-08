import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AtModule } from 'at-ng';
import { CommonDataTableComponent } from './common-data-table/common-data-table.component';
import { NestedJsonKeyPipe } from './nested-json-key.pipe';
import { TtComponentModule } from '../component/component.module';
import { TtI18nModule } from '../i18n/i18n.module';

@NgModule({
  declarations: [CommonDataTableComponent, NestedJsonKeyPipe],
  imports: [
    AtModule,
    FormsModule,
    RouterModule,
    TtI18nModule,
    TtComponentModule,
    CommonModule
  ],
  exports: [CommonDataTableComponent]
})
export class TtDataTableModule {
}
