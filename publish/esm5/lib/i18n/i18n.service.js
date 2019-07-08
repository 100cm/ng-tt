/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { I18N_TOKEN } from './i18n-token';
import { zhCN } from './languages/zh-CN';
import * as i0 from "@angular/core";
import * as i1 from "./i18n-token";
var I18nService = /** @class */ (function () {
    function I18nService(locale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    Object.defineProperty(I18nService.prototype, "localChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18nService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._locale = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} language
     * @return {?}
     */
    I18nService.prototype.setLocale = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        this._locale = language;
        this._change.next(language);
    };
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    I18nService.prototype.translate = /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        /** @type {?} */
        var content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return content = content.replace(new RegExp("%" + key + "%", 'g'), data[key]); }));
            }
            return content;
        }
        return null;
    };
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    I18nService.prototype._getObjectPath = /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        // tslint:disable-line:no-any
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    I18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    I18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [I18N_TOKEN,] }] }
    ]; };
    /** @nocollapse */ I18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function I18nService_Factory() { return new I18nService(i0.ɵɵinject(i1.I18N_TOKEN)); }, token: I18nService, providedIn: "root" });
    return I18nService;
}());
export { I18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    I18nService.prototype._change;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
export function LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new I18nService(locale);
}
/** @type {?} */
export var I18N_SERVICE_PROVIDER = {
    provide: I18nService,
    useFactory: LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), I18nService], I18N_TOKEN]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvaTE4bi9pMThuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFrQixRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUV6QztJQUtFLHFCQUFnQyxNQUFxQjtRQU03QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUxqRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBTUQsc0JBQUksb0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQW9CO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBOzs7OztJQU1ELCtCQUFTOzs7O0lBQVQsVUFBVSxRQUF1QjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCwrQkFBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxJQUFhOztZQUMvQixPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFVO1FBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQUksR0FBRyxNQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWpFLENBQWlFLEVBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU8sb0NBQWM7Ozs7OztJQUF0QixVQUF1QixHQUFXLEVBQUUsSUFBWTs7O1lBQzFDLEdBQUcsR0FBRyxHQUFHOztZQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNOztZQUN0QixLQUFLLEdBQUcsQ0FBQztRQUNiLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDOztnQkFsREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFHYyxNQUFNLFNBQUMsVUFBVTs7O3NCQVhoQztDQXlEQyxBQW5ERCxJQW1EQztTQWhEWSxXQUFXOzs7Ozs7SUFNdEIsOEJBQStCOzs7OztJQUUvQiw4QkFBbUU7Ozs7Ozs7QUEwQ3JFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFrQixFQUFFLE1BQXFCO0lBQ3ZGLE9BQU8sS0FBSyxJQUFJLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUFhO0lBQzdDLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUFDO0NBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJMThOX1RPS0VOIH0gZnJvbSAnLi9pMThuLXRva2VuJztcbmltcG9ydCB7IFR0MThuSW50ZXJmYWNlIGFzIEkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL2kxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IHpoQ04gfSBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEkxOE5fVE9LRU4pIGxvY2FsZTogSTE4bkludGVyZmFjZSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aENOKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvY2FsZTogSTE4bkludGVyZmFjZTtcblxuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEkxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XG5cbiAgZ2V0IGxvY2FsQ2hhbmdlKCk6IE9ic2VydmFibGU8STE4bkludGVyZmFjZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IEkxOG5JbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBzZXQgbG9jYWxlKHZhbHVlOiBJMThuSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XG4gIH1cblxuICBzZXRMb2NhbGUobGFuZ3VhZ2U6IEkxOG5JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBsYW5ndWFnZTtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dChsYW5ndWFnZSk7XG4gIH1cblxuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVtrZXldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogb2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGxldCByZXMgPSBvYmo7XG4gICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAocmVzICYmIGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIHJlcyA9IHJlc1twYXRoc1tpbmRleCsrXV07XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA9PT0gZGVwdGggPyByZXMgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBJMThuU2VydmljZSwgbG9jYWxlOiBJMThuSW50ZXJmYWNlKTogSTE4blNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IEkxOG5TZXJ2aWNlKGxvY2FsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBJMThOX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBJMThuU2VydmljZSxcbiAgdXNlRmFjdG9yeTogTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIEkxOG5TZXJ2aWNlXSwgSTE4Tl9UT0tFTl1cbn07XG4iXX0=