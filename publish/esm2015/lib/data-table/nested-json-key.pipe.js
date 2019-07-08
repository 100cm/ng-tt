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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLWpzb24ta2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXRhYmxlL25lc3RlZC1qc29uLWtleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFFNUIsU0FBUyxDQUFDLEtBQWdCLEVBQUUsSUFBYTs7WUFDbkMsV0FBVyxHQUFHLEtBQUs7O2NBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQVpGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZUFBZTthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduZXN0ZWRKc29uS2V5J1xufSlcbmV4cG9ydCBjbGFzcyBOZXN0ZWRKc29uS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogQW55T2JqZWN0LCBhcmdzPzogc3RyaW5nKTogQW55T2JqZWN0IHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCBrZXlzID0gYXJncy5zcGxpdCgnLicpO1xuICAgIGtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWVba107XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbn1cbiJdfQ==