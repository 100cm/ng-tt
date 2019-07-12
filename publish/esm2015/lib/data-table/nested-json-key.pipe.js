/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NestedJsonKeyPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        // @ts-ignore
        /** @type {?} */
        let returnValue = value;
        /** @type {?} */
        const keys = args.split('.');
        keys.forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            returnValue = returnValue[k];
        }));
        return returnValue;
    }
}
NestedJsonKeyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nestedJsonKey'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLWpzb24ta2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXRhYmxlL25lc3RlZC1qc29uLWtleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFFNUIsU0FBUyxDQUFDLEtBQWdCLEVBQUUsSUFBYTs7O1lBRW5DLFdBQVcsR0FBVyxLQUFLOztjQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNmLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGVBQWU7YUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlPYmplY3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FueS1vYmplY3QuaW50ZXJmYWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbmVzdGVkSnNvbktleSdcbn0pXG5leHBvcnQgY2xhc3MgTmVzdGVkSnNvbktleVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IEFueU9iamVjdCwgYXJncz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCByZXR1cm5WYWx1ZTogc3RyaW5nID0gdmFsdWU7XG4gICAgY29uc3Qga2V5cyA9IGFyZ3Muc3BsaXQoJy4nKTtcbiAgICBrZXlzLmZvckVhY2goayA9PiB7XG4gICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlW2tdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG59XG4iXX0=