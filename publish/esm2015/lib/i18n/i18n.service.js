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
export class I18nService {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    /**
     * @return {?}
     */
    get localChange() {
        return this._change.asObservable();
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set locale(value) {
        this._locale = value;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    setLocale(language) {
        this._locale = language;
        this._change.next(language);
    }
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        /** @type {?} */
        let content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key])));
            }
            return content;
        }
        return null;
    }
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        // tslint:disable-line:no-any
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
I18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
I18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [I18N_TOKEN,] }] }
];
/** @nocollapse */ I18nService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function I18nService_Factory() { return new I18nService(i0.ɵɵinject(i1.I18N_TOKEN)); }, token: I18nService, providedIn: "root" });
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
export const I18N_SERVICE_PROVIDER = {
    provide: I18nService,
    useFactory: LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), I18nService], I18N_TOKEN]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvaTE4bi9pMThuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFrQixRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUt6QyxNQUFNLE9BQU8sV0FBVzs7OztJQUV0QixZQUFnQyxNQUFxQjtRQU03QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUxqRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBTUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUF1QjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLElBQWE7O1lBQy9CLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQVU7UUFDL0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDdkc7WUFDRCxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxHQUFXLEVBQUUsSUFBWTs7O1lBQzFDLEdBQUcsR0FBRyxHQUFHOztjQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNOztZQUN0QixLQUFLLEdBQUcsQ0FBQztRQUNiLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUdjLE1BQU0sU0FBQyxVQUFVOzs7Ozs7OztJQUk5Qiw4QkFBK0I7Ozs7O0lBRS9CLDhCQUFtRTs7Ozs7OztBQTBDckUsTUFBTSxVQUFVLCtCQUErQixDQUFDLEtBQWtCLEVBQUUsTUFBcUI7SUFDdkYsT0FBTyxLQUFLLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7SUFDN0MsT0FBTyxFQUFFLFdBQVc7SUFDcEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxVQUFVLENBQUM7Q0FDbEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEkxOE5fVE9LRU4gfSBmcm9tICcuL2kxOG4tdG9rZW4nO1xuaW1wb3J0IHsgVHQxOG5JbnRlcmZhY2UgYXMgSTE4bkludGVyZmFjZSB9IGZyb20gJy4vaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgemhDTiB9IGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSTE4blNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSTE4Tl9UT0tFTikgbG9jYWxlOiBJMThuSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoQ04pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9jYWxlOiBJMThuSW50ZXJmYWNlO1xuXG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8STE4bkludGVyZmFjZT4odGhpcy5fbG9jYWxlKTtcblxuICBnZXQgbG9jYWxDaGFuZ2UoKTogT2JzZXJ2YWJsZTxJMThuSW50ZXJmYWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogSTE4bkludGVyZmFjZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIHNldCBsb2NhbGUodmFsdWU6IEkxOG5JbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldExvY2FsZShsYW5ndWFnZTogSTE4bkludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMuX2xvY2FsZSA9IGxhbmd1YWdlO1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxhbmd1YWdlKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIGFzIHN0cmluZztcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJSR7a2V5fSVgLCAnZycpLCBkYXRhW2tleV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE9iamVjdFBhdGgob2JqOiBvYmplY3QsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG9iamVjdCB8IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgbGV0IHJlcyA9IG9iajtcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBjb25zdCBkZXB0aCA9IHBhdGhzLmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xuICAgICAgcmVzID0gcmVzW3BhdGhzW2luZGV4KytdXTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IEkxOG5TZXJ2aWNlLCBsb2NhbGU6IEkxOG5JbnRlcmZhY2UpOiBJMThuU2VydmljZSB7XG4gIHJldHVybiBleGlzdCB8fCBuZXcgSTE4blNlcnZpY2UobG9jYWxlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEkxOE5fU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IEkxOG5TZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBMT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgSTE4blNlcnZpY2VdLCBJMThOX1RPS0VOXVxufTtcbiJdfQ==