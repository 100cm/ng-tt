import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { I18nService } from './i18n.service';

@Pipe({
  name: 'I18n'
})
export class TtI18nPipe implements PipeTransform {

  constructor(private _locale: I18nService) {
  }

  transform(path: string, keyValue?: object): Observable<string> {
    const names = path.split('.');
    const name = names[names.length - 1];
    return this._locale.localChange.pipe(map(locale => {
      return this._locale.translate(path, keyValue) || name;
    }));
  }
}
