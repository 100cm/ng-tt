/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Created by icepoint1999 on 7/31/16.
 */
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isDate, isObject, isUndefined } from 'lodash';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../inject-tokens/api-config-token";
var AccessToken = /** @class */ (function () {
    function AccessToken() {
    }
    Object.defineProperty(AccessToken.prototype, "access_token", {
        get: /**
         * @return {?}
         */
        function () {
            return this._access_token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "token_type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._token_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "expires_in", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expires_in;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "created_at", {
        get: /**
         * @return {?}
         */
        function () {
            return this._created_at;
        },
        enumerable: true,
        configurable: true
    });
    return AccessToken;
}());
export { AccessToken };
if (false) {
    /** @type {?} */
    AccessToken.prototype._access_token;
    /** @type {?} */
    AccessToken.prototype._token_type;
    /** @type {?} */
    AccessToken.prototype._expires_in;
    /** @type {?} */
    AccessToken.prototype._created_at;
}
// custom serialize encoder
var 
// custom serialize encoder
MyHttpUrlEncodingCodec = /** @class */ (function (_super) {
    tslib_1.__extends(MyHttpUrlEncodingCodec, _super);
    function MyHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} k
     * @return {?}
     */
    MyHttpUrlEncodingCodec.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) {
        return encodeURIComponent(k);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    MyHttpUrlEncodingCodec.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        return encodeURIComponent(this.serializeValue(v));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} v
     * @return {?}
     */
    MyHttpUrlEncodingCodec.prototype.serializeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (isObject(v)) {
            return isDate(v) ? v.toISOString() : JSON.stringify(v);
        }
        if (v === null || isUndefined(v)) {
            return '';
        }
        return v;
    };
    return MyHttpUrlEncodingCodec;
}(HttpUrlEncodingCodec));
// custom serialize encoder
export { MyHttpUrlEncodingCodec };
var HttpHelper = /** @class */ (function () {
    function HttpHelper(http_client, platformId, api_config) {
        this.http_client = http_client;
        this.platformId = platformId;
        this.api_config = api_config;
        this.apiConfig = api_config;
    }
    Object.defineProperty(HttpHelper.prototype, "access_token", {
        get: /**
         * @return {?}
         */
        function () {
            return isPlatformBrowser(this.platformId) ? (this._access_token || localStorage.getItem('access_token')) : '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._access_token = value;
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('access_token', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * TODO 有待优化 rxjs
     * 封装自定义get
     */
    /**
     * TODO 有待优化 rxjs
     * 封装自定义get
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_GET = /**
     * TODO 有待优化 rxjs
     * 封装自定义get
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }
        /** @type {?} */
        var options = { headers: headers };
        return this.http_client.get(url, {
            params: new HttpParams({
                encoder: new MyHttpUrlEncodingCodec(),
                fromObject: params
            })
        });
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_DELETE = /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }
        return this.http_client.delete(url, {
            params: new HttpParams({
                encoder: new MyHttpUrlEncodingCodec(),
                fromObject: params
            })
        });
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_POST = /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }
        /** @type {?} */
        var options = { headers: headers };
        return this.http_client.post(url, params, options);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_PUT = /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    function (url, body, headers) {
        if (headers === void 0) { headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }
        /** @type {?} */
        var options = { headers: headers };
        return this.http_client.put(url, body, options);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_UPLOAD_PUT = /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    function (url, body, prefix, headers) {
        if (prefix === void 0) { prefix = 'update'; }
        if (headers === void 0) { headers = new HttpHeaders(); }
        /** @type {?} */
        var token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
        // headers.append('Content-Type', 'multipart/form-data');
        headers.set('Accept', 'application/json');
        headers.set('encrypt', 'multipart/form-data');
        /** @type {?} */
        var options = { headers: headers };
        /** @type {?} */
        var formData = this.objectToFormData(body, new FormData());
        return this.http_client.put(url, formData, options);
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    HttpHelper.prototype.AUTH_HTTP_UPLOAD_POST = /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    function (url, body, prefix, headers) {
        if (prefix === void 0) { prefix = 'update'; }
        if (headers === void 0) { headers = new HttpHeaders(); }
        /** @type {?} */
        var token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
        // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        /** @type {?} */
        var options = { headers: headers };
        /** @type {?} */
        var formData = this.objectToFormData(body, new FormData());
        return this.http_client.post(url, formData, options);
    };
    // 将对象或数组转换成formdata的格式
    // 将对象或数组转换成formdata的格式
    /**
     * @param {?} obj
     * @param {?} form
     * @param {?=} namespace
     * @return {?}
     */
    HttpHelper.prototype.objectToFormData = 
    // 将对象或数组转换成formdata的格式
    /**
     * @param {?} obj
     * @param {?} form
     * @param {?=} namespace
     * @return {?}
     */
    function (obj, form, namespace) {
        var e_1, _a;
        if (namespace === void 0) { namespace = ''; }
        /** @type {?} */
        var fd = form || new FormData();
        /** @type {?} */
        var formKey;
        if (obj instanceof Array) {
            try {
                for (var obj_1 = tslib_1.__values(obj), obj_1_1 = obj_1.next(); !obj_1_1.done; obj_1_1 = obj_1.next()) {
                    var item = obj_1_1.value;
                    if (typeof item === 'object' && !(item instanceof File)) {
                        this.objectToFormData(item, fd, namespace + "[]");
                    }
                    else {
                        fd.append(namespace + "[]", item);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (obj_1_1 && !obj_1_1.done && (_a = obj_1.return)) _a.call(obj_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    formKey = namespace ? namespace + "[" + property + "]" : property;
                    // if the property is an object, but not a File,
                    // use recursivity.
                    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                        this.objectToFormData(obj[property], fd, formKey);
                    }
                    else {
                        // if it's a string or a File object
                        fd.append(formKey, obj[property]);
                    }
                }
            }
        }
        return fd;
    };
    HttpHelper.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpHelper.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ HttpHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpHelper_Factory() { return new HttpHelper(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.API_CONFIG_TOKEN)); }, token: HttpHelper, providedIn: "root" });
    return HttpHelper;
}());
export { HttpHelper };
if (false) {
    /** @type {?} */
    HttpHelper.prototype.apiConfig;
    /**
     * @type {?}
     * @private
     */
    HttpHelper.prototype._access_token;
    /** @type {?} */
    HttpHelper.prototype.http_client;
    /**
     * @type {?}
     * @private
     */
    HttpHelper.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    HttpHelper.prototype.api_config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvaHR0cC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBS3JFO0lBQUE7SUFxQkEsQ0FBQztJQWZDLHNCQUFJLHFDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOzs7O0lBcEJDLG9DQUE2Qjs7SUFDN0Isa0NBQTJCOztJQUMzQixrQ0FBMkI7O0lBQzNCLGtDQUEyQjs7O0FBb0I3Qjs7O0lBQTRDLGtEQUFvQjtJQUFoRTs7SUFxQkEsQ0FBQzs7Ozs7SUFuQkMsMENBQVM7Ozs7SUFBVCxVQUFV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aUJBQ25COzs7O2dCQTNEUSxVQUFVO2dCQWlFb0MsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0RBQ2xCLE1BQU0sU0FBQyxnQkFBZ0I7OztxQkF2RXRDO0NBZ0xDLEFBbEhELElBa0hDO1NBL0dZLFVBQVU7OztJQUVyQiwrQkFBOEI7Ozs7O0lBUzlCLG1DQUE4Qjs7SUFQbEIsaUNBQThCOzs7OztJQUM5QixnQ0FBK0M7Ozs7O0lBQy9DLGdDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBpY2Vwb2ludDE5OTkgb24gNy8zMS8xNi5cbiAqL1xuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNEYXRlLCBpc09iamVjdCwgaXNVbmRlZmluZWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQVBJX0NPTkZJR19UT0tFTiB9IGZyb20gJy4uL2luamVjdC10b2tlbnMvYXBpLWNvbmZpZy10b2tlbic7XG5pbXBvcnQgeyBDcmVhdGVQYXJhbXMsIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXBpQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGktY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBKc29uUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2pzb24tcmVzcG9uc2UuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuIHtcbiAgcHVibGljIF9hY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgcHVibGljIF90b2tlbl90eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBfZXhwaXJlc19pbjogbnVtYmVyO1xuICBwdWJsaWMgX2NyZWF0ZWRfYXQ6IG51bWJlcjtcblxuICBnZXQgYWNjZXNzX3Rva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc190b2tlbjtcbiAgfVxuXG4gIGdldCB0b2tlbl90eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuX3R5cGU7XG4gIH1cblxuICBnZXQgZXhwaXJlc19pbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leHBpcmVzX2luO1xuICB9XG5cbiAgZ2V0IGNyZWF0ZWRfYXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlZF9hdDtcbiAgfVxufVxuXG4vLyBjdXN0b20gc2VyaWFsaXplIGVuY29kZXJcbmV4cG9ydCBjbGFzcyBNeUh0dHBVcmxFbmNvZGluZ0NvZGVjIGV4dGVuZHMgSHR0cFVybEVuY29kaW5nQ29kZWMge1xuXG4gIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gIH1cblxuICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zZXJpYWxpemVWYWx1ZSh2KSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNlcmlhbGl6ZVZhbHVlKHY6IGFueSk6IGFueSB7XG4gICAgaWYgKGlzT2JqZWN0KHYpKSB7XG4gICAgICByZXR1cm4gaXNEYXRlKHYpID8gdi50b0lTT1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodik7XG4gICAgfVxuICAgIGlmICh2ID09PSBudWxsIHx8IGlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cEhlbHBlciB7XG5cbiAgYXBpQ29uZmlnOiBBcGlDb25maWdJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHBfY2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICAgICAgICAgICAgQEluamVjdChBUElfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwaV9jb25maWc6IEFwaUNvbmZpZ0ludGVyZmFjZSkge1xuICAgIHRoaXMuYXBpQ29uZmlnID0gYXBpX2NvbmZpZztcbiAgfVxuXG4gIC8vIOWtmOWCqHRva2VuXG4gIHByaXZhdGUgX2FjY2Vzc190b2tlbjogc3RyaW5nO1xuXG4gIGdldCBhY2Nlc3NfdG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSA/ICh0aGlzLl9hY2Nlc3NfdG9rZW4gfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKSA6ICcnO1xuICB9XG5cbiAgc2V0IGFjY2Vzc190b2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZXNzX3Rva2VuID0gdmFsdWU7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE8g5pyJ5b6F5LyY5YyWIHJ4anNcbiAgICog5bCB6KOF6Ieq5a6a5LmJZ2V0XG4gICAqL1xuICBwdWJsaWMgQVVUSF9IVFRQX0dFVDxUPih1cmw6IHN0cmluZywgcGFyYW1zOiBTZWFyY2hQYXJhbXMgPSB7fSwgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtoZWFkZXJzfTtcbiAgICByZXR1cm4gdGhpcy5odHRwX2NsaWVudC5nZXQ8SnNvblJlc3BvbnNlPFQ+Pih1cmwsIHtcbiAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICBlbmNvZGVyOiBuZXcgTXlIdHRwVXJsRW5jb2RpbmdDb2RlYygpLFxuICAgICAgICBmcm9tT2JqZWN0OiBwYXJhbXNcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgQVVUSF9IVFRQX0RFTEVURTxUPih1cmw6IHN0cmluZywgcGFyYW1zOiBTZWFyY2hQYXJhbXMgPSB7fSwgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cF9jbGllbnQuZGVsZXRlPEpzb25SZXNwb25zZTxUPj4odXJsLCB7XG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgZW5jb2RlcjogbmV3IE15SHR0cFVybEVuY29kaW5nQ29kZWMoKSxcbiAgICAgICAgZnJvbU9iamVjdDogcGFyYW1zXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIEFVVEhfSFRUUF9QT1NUPFQ+KHVybDogc3RyaW5nLCBwYXJhbXM6IENyZWF0ZVBhcmFtcyA9IHt9LCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pKTogT2JzZXJ2YWJsZTxKc29uUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge2hlYWRlcnN9O1xuICAgIHJldHVybiB0aGlzLmh0dHBfY2xpZW50LnBvc3Q8SnNvblJlc3BvbnNlPFQ+Pih1cmwsIHBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgQVVUSF9IVFRQX1BVVDxUPih1cmw6IHN0cmluZywgYm9keTogT2JqZWN0LCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pKTogT2JzZXJ2YWJsZTxKc29uUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge2hlYWRlcnN9O1xuICAgIHJldHVybiB0aGlzLmh0dHBfY2xpZW50LnB1dDxKc29uUmVzcG9uc2U8VD4+KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgQVVUSF9IVFRQX1VQTE9BRF9QVVQ8VD4odXJsOiBzdHJpbmcsIGJvZHk6IE9iamVjdCwgcHJlZml4OiBzdHJpbmcgPSAndXBkYXRlJywgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykgOiB0aGlzLmFjY2Vzc190b2tlbikgfHwgbnVsbDtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcbiAgICBoZWFkZXJzLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBoZWFkZXJzLnNldCgnZW5jcnlwdCcsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtoZWFkZXJzfTtcbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSB0aGlzLm9iamVjdFRvRm9ybURhdGEoYm9keSwgbmV3IEZvcm1EYXRhKCkpO1xuICAgIHJldHVybiB0aGlzLmh0dHBfY2xpZW50LnB1dDxKc29uUmVzcG9uc2U8VD4+KHVybCwgZm9ybURhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIEFVVEhfSFRUUF9VUExPQURfUE9TVDxUPih1cmw6IHN0cmluZywgYm9keTogT2JqZWN0LCBwcmVmaXg6IHN0cmluZyA9ICd1cGRhdGUnLCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpKTogT2JzZXJ2YWJsZTxKc29uUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSA6IHRoaXMuYWNjZXNzX3Rva2VuKSB8fCBudWxsO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7aGVhZGVyc307XG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gdGhpcy5vYmplY3RUb0Zvcm1EYXRhKGJvZHksIG5ldyBGb3JtRGF0YSgpKTtcbiAgICByZXR1cm4gdGhpcy5odHRwX2NsaWVudC5wb3N0PEpzb25SZXNwb25zZTxUPj4odXJsLCBmb3JtRGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyDlsIblr7nosaHmiJbmlbDnu4TovazmjaLmiJBmb3JtZGF0YeeahOagvOW8j1xuICBvYmplY3RUb0Zvcm1EYXRhKG9iajogb2JqZWN0LCBmb3JtOiBGb3JtRGF0YSwgbmFtZXNwYWNlOiBzdHJpbmcgPSAnJyk6IEZvcm1EYXRhIHtcbiAgICBjb25zdCBmZCA9IGZvcm0gfHwgbmV3IEZvcm1EYXRhKCk7XG4gICAgbGV0IGZvcm1LZXk7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygb2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIShpdGVtIGluc3RhbmNlb2YgRmlsZSkpIHtcbiAgICAgICAgICB0aGlzLm9iamVjdFRvRm9ybURhdGEoaXRlbSwgZmQsIGAke25hbWVzcGFjZX1bXWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChgJHtuYW1lc3BhY2V9W11gLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuXG4gICAgICAgICAgZm9ybUtleSA9IG5hbWVzcGFjZSA/IGAke25hbWVzcGFjZX1bJHtwcm9wZXJ0eX1dYCA6IHByb3BlcnR5O1xuICAgICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIGJ1dCBub3QgYSBGaWxlLFxuICAgICAgICAgIC8vIHVzZSByZWN1cnNpdml0eS5cbiAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wZXJ0eV0gPT09ICdvYmplY3QnICYmICEob2JqW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZpbGUpKSB7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0VG9Gb3JtRGF0YShvYmpbcHJvcGVydHldLCBmZCwgZm9ybUtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gaWYgaXQncyBhIHN0cmluZyBvciBhIEZpbGUgb2JqZWN0XG4gICAgICAgICAgICBmZC5hcHBlbmQoZm9ybUtleSwgb2JqW3Byb3BlcnR5XSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZkO1xuXG4gIH1cblxufVxuIl19