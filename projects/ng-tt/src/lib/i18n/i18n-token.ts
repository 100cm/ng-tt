import { InjectionToken } from '@angular/core';
import { Tt18nInterface as I18nInterface } from './i18n.interface';

export const I18N_TOKEN = new InjectionToken<I18nInterface>('tt-i18n');
