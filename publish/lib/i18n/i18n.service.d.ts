import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Tt18nInterface as I18nInterface } from './i18n.interface';
export declare class I18nService {
    constructor(locale: I18nInterface);
    private _locale;
    private _change;
    readonly localChange: Observable<I18nInterface>;
    locale: I18nInterface;
    setLocale(language: I18nInterface): void;
    translate(path: string, data?: object): string;
    private _getObjectPath;
}
export declare function LOCALE_SERVICE_PROVIDER_FACTORY(exist: I18nService, locale: I18nInterface): I18nService;
export declare const I18N_SERVICE_PROVIDER: Provider;
