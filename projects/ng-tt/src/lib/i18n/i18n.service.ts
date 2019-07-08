import { Inject, Injectable, InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { I18N_TOKEN } from './i18n-token';
import { Tt18nInterface as I18nInterface } from './i18n.interface';
import { zhCN } from './languages/zh-CN';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(@Inject(I18N_TOKEN) locale: I18nInterface) {
    this.setLocale(locale || zhCN);
  }

  private _locale: I18nInterface;

  private _change = new BehaviorSubject<I18nInterface>(this._locale);

  get localChange(): Observable<I18nInterface> {
    return this._change.asObservable();
  }

  get locale(): I18nInterface {
    return this._locale;
  }

  set locale(value: I18nInterface) {
    this._locale = value;
  }

  setLocale(language: I18nInterface): void {
    this._locale = language;
    this._change.next(language);
  }

  translate(path: string, data?: object): string {
    let content = this._getObjectPath(this._locale, path) as string;
    if (typeof content === 'string') {
      if (data) {
        Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
      }
      return content;
    }
    return null;
  }

  private _getObjectPath(obj: object, path: string): string | object | any { // tslint:disable-line:no-any
    let res = obj;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}

export function LOCALE_SERVICE_PROVIDER_FACTORY(exist: I18nService, locale: I18nInterface): I18nService {
  return exist || new I18nService(locale);
}

export const I18N_SERVICE_PROVIDER: Provider = {
  provide: I18nService,
  useFactory: LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), I18nService], I18N_TOKEN]
};
