/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { I18nService } from './i18n.service';
var TtI18nPipe = /** @class */ (function () {
    function TtI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    TtI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        var _this = this;
        /** @type {?} */
        var names = path.split('.');
        /** @type {?} */
        var name = names[names.length - 1];
        return this._locale.localChange.pipe(map((/**
         * @param {?} locale
         * @return {?}
         */
        function (locale) {
            return _this._locale.translate(path, keyValue) || name;
        })));
    };
    TtI18nPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'I18n'
                },] }
    ];
    /** @nocollapse */
    TtI18nPipe.ctorParameters = function () { return [
        { type: I18nService }
    ]; };
    return TtI18nPipe;
}());
export { TtI18nPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TtI18nPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvaTE4bi9pMThuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFLRSxvQkFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDOzs7Ozs7SUFFRCw4QkFBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxRQUFpQjtRQUF6QyxpQkFNQzs7WUFMTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQ3ZCLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTTtZQUM3QyxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDeEQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQWRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7OztnQkFKUSxXQUFXOztJQWlCcEIsaUJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxVQUFVOzs7Ozs7SUFFVCw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJMThuU2VydmljZSB9IGZyb20gJy4vaTE4bi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnSTE4bidcbn0pXG5leHBvcnQgY2xhc3MgVHRJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZTogSTE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIGtleVZhbHVlPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBuYW1lcyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBjb25zdCBuYW1lID0gbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5sb2NhbENoYW5nZS5waXBlKG1hcChsb2NhbGUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS50cmFuc2xhdGUocGF0aCwga2V5VmFsdWUpIHx8IG5hbWU7XG4gICAgfSkpO1xuICB9XG59XG4iXX0=