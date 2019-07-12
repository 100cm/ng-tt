/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var NestedJsonKeyPipe = /** @class */ (function () {
    function NestedJsonKeyPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    NestedJsonKeyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        // @ts-ignore
        /** @type {?} */
        var returnValue = value;
        /** @type {?} */
        var keys = args.split('.');
        keys.forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            returnValue = returnValue[k];
        }));
        return returnValue;
    };
    NestedJsonKeyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nestedJsonKey'
                },] }
    ];
    return NestedJsonKeyPipe;
}());
export { NestedJsonKeyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLWpzb24ta2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXRhYmxlL25lc3RlZC1qc29uLWtleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7O0lBVkMscUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFnQixFQUFFLElBQWE7OztZQUVuQyxXQUFXLEdBQVcsS0FBSzs7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1osV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQWJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZUFBZTtpQkFDdEI7O0lBYUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlPYmplY3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FueS1vYmplY3QuaW50ZXJmYWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbmVzdGVkSnNvbktleSdcbn0pXG5leHBvcnQgY2xhc3MgTmVzdGVkSnNvbktleVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IEFueU9iamVjdCwgYXJncz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCByZXR1cm5WYWx1ZTogc3RyaW5nID0gdmFsdWU7XG4gICAgY29uc3Qga2V5cyA9IGFyZ3Muc3BsaXQoJy4nKTtcbiAgICBrZXlzLmZvckVhY2goayA9PiB7XG4gICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlW2tdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG59XG4iXX0=