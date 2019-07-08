import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtModule } from 'at-ng';
import { TtI18nModule } from '../i18n/i18n.module';
import { SearchGroupComponent } from './search-group/search-group.component';
import { EmptyDataComponent } from './empty-data/empty-data.component';

@NgModule({
  declarations: [SearchGroupComponent, EmptyDataComponent],
  imports: [
    FormsModule,
    TtI18nModule,
    AtModule,
    CommonModule
  ],
  exports: [SearchGroupComponent, EmptyDataComponent]
})
export class TtComponentModule {
}
