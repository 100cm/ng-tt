import { PipeTransform } from '@angular/core';
import { AnyObject } from '../interfaces/any-object.interface';
export declare class NestedJsonKeyPipe implements PipeTransform {
    transform(value: AnyObject, args?: string): string;
}
