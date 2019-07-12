import { Pipe, PipeTransform } from '@angular/core';
import { AnyObject } from '../interfaces/any-object.interface';

@Pipe({
  name: 'nestedJsonKey'
})
export class NestedJsonKeyPipe implements PipeTransform {

  transform(value: AnyObject, args?: string): string {
    // @ts-ignore
    let returnValue: string = value;
    const keys = args.split('.');
    keys.forEach(k => {
      returnValue = returnValue[k];
    });
    return returnValue;
  }

}
