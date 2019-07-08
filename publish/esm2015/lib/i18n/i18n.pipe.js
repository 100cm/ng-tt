/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { I18nService } from './i18n.service';
export class TtI18nPipe {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    transform(path, keyValue) {
        /** @type {?} */
        const names = path.split('.');
        /** @type {?} */
        const name = names[names.length - 1];
        return this._locale.localChange.pipe(map((/**
         * @param {?} locale
         * @return {?}
         */
        locale => {
            return this._locale.translate(path, keyValue) || name;
        })));
    }
}
TtI18nPipe.decorators = [
    { type: Pipe, args: [{
                name: 'I18n'
            },] }
];
/** @nocollapse */
TtI18nPipe.ctorParameters = () => [
    { type: I18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TtI18nPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvaTE4bi9pMThuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsTUFBTSxPQUFPLFVBQVU7Ozs7SUFFckIsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLFFBQWlCOztjQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQ3ZCLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBZEYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxNQUFNO2FBQ2I7Ozs7WUFKUSxXQUFXOzs7Ozs7O0lBT04sNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSTE4blNlcnZpY2UgfSBmcm9tICcuL2kxOG4uc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ0kxOG4nXG59KVxuZXhwb3J0IGNsYXNzIFR0STE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IEkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0ocGF0aDogc3RyaW5nLCBrZXlWYWx1ZT86IG9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgbmFtZXMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW25hbWVzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUubG9jYWxDaGFuZ2UucGlwZShtYXAobG9jYWxlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKSB8fCBuYW1lO1xuICAgIH0pKTtcbiAgfVxufVxuIl19