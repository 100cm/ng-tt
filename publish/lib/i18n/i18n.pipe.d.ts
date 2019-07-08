import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { I18nService } from './i18n.service';
export declare class TtI18nPipe implements PipeTransform {
    private _locale;
    constructor(_locale: I18nService);
    transform(path: string, keyValue?: object): Observable<string>;
}
