import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AT_I18N, zh_CN } from 'at-ng';
import { I18N_TOKEN } from './i18n-token';
import { Tt18nInterface } from './i18n.interface';
import { TtI18nPipe } from './i18n.pipe';
import { TtI18nComponent } from './i18n.component';

@NgModule({
  declarations: [
    TtI18nPipe,
    TtI18nComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TtI18nPipe, TtI18nComponent]
})
export class TtI18nModule {

  static forRoot(locale: Tt18nInterface): ModuleWithProviders {
    return {
      ngModule: TtI18nModule,
      providers: [{provide: AT_I18N, useValue: zh_CN}, {provide: I18N_TOKEN, useValue: locale}]
    };
  }
}
