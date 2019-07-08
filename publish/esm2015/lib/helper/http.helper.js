/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class AccessToken {
    /**
     * @return {?}
     */
    get access_token() {
        return this._access_token;
    }
    /**
     * @return {?}
     */
    get token_type() {
        return this._token_type;
    }
    /**
     * @return {?}
     */
    get expires_in() {
        return this._expires_in;
    }
    /**
     * @return {?}
     */
    get created_at() {
        return this._created_at;
    }
}
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
export class MyHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    /**
     * @param {?} k
     * @return {?}
     */
    encodeKey(k) {
        return encodeURIComponent(k);
    }
    /**
     * @param {?} v
     * @return {?}
     */
    encodeValue(v) {
        return encodeURIComponent(this.serializeValue(v));
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} v
     * @return {?}
     */
    serializeValue(v) {
        if (isObject(v)) {
            return isDate(v) ? v.toISOString() : JSON.stringify(v);
        }
        if (v === null || isUndefined(v)) {
            return '';
        }
        return v;
    }
}
export class HttpHelper {
    /**
     * @param {?} http_client
     * @param {?} platformId
     * @param {?} api_config
     */
    constructor(http_client, platformId, api_config) {
        this.http_client = http_client;
        this.platformId = platformId;
        this.api_config = api_config;
        this.apiConfig = api_config;
    }
    /**
     * @return {?}
     */
    get access_token() {
        return isPlatformBrowser(this.platformId) ? (this._access_token || localStorage.getItem('access_token')) : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set access_token(value) {
        this._access_token = value;
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('access_token', value);
        }
    }
    /**
     * TODO 有待优化 rxjs
     * 封装自定义get
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_GET(url, params = {}, headers = new HttpHeaders({ 'Content-Type': 'application/json' })) {
        /** @type {?} */
        const options = { headers };
        return this.http_client.get(url, {
            params: new HttpParams({
                encoder: new MyHttpUrlEncodingCodec(),
                fromObject: params
            })
        });
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_DELETE(url, params = {}, headers = new HttpHeaders({ 'Content-Type': 'application/json' })) {
        return this.http_client.delete(url, {
            params: new HttpParams({
                encoder: new MyHttpUrlEncodingCodec(),
                fromObject: params
            })
        });
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} params
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_POST(url, params = {}, headers = new HttpHeaders({ 'Content-Type': 'application/json' })) {
        /** @type {?} */
        const options = { headers };
        return this.http_client.post(url, params, options);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_PUT(url, body, headers = new HttpHeaders({ 'Content-Type': 'application/json' })) {
        /** @type {?} */
        const options = { headers };
        return this.http_client.put(url, body, options);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_UPLOAD_PUT(url, body, prefix = 'update', headers = new HttpHeaders()) {
        /** @type {?} */
        const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
        // headers.append('Content-Type', 'multipart/form-data');
        headers.set('Accept', 'application/json');
        headers.set('encrypt', 'multipart/form-data');
        /** @type {?} */
        const options = { headers };
        /** @type {?} */
        const formData = this.objectToFormData(body, new FormData());
        return this.http_client.put(url, formData, options);
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} body
     * @param {?=} prefix
     * @param {?=} headers
     * @return {?}
     */
    AUTH_HTTP_UPLOAD_POST(url, body, prefix = 'update', headers = new HttpHeaders()) {
        /** @type {?} */
        const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
        // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        /** @type {?} */
        const options = { headers };
        /** @type {?} */
        const formData = this.objectToFormData(body, new FormData());
        return this.http_client.post(url, formData, options);
    }
    // 将对象或数组转换成formdata的格式
    /**
     * @param {?} obj
     * @param {?} form
     * @param {?=} namespace
     * @return {?}
     */
    objectToFormData(obj, form, namespace = '') {
        /** @type {?} */
        const fd = form || new FormData();
        /** @type {?} */
        let formKey;
        if (obj instanceof Array) {
            for (const item of obj) {
                if (typeof item === 'object' && !(item instanceof File)) {
                    this.objectToFormData(item, fd, `${namespace}[]`);
                }
                else {
                    fd.append(`${namespace}[]`, item);
                }
            }
        }
        else {
            for (const property in obj) {
                if (obj.hasOwnProperty(property)) {
                    formKey = namespace ? `${namespace}[${property}]` : property;
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
    }
}
HttpHelper.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpHelper.ctorParameters = () => [
    { type: HttpClient },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG_TOKEN,] }] }
];
/** @nocollapse */ HttpHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpHelper_Factory() { return new HttpHelper(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.API_CONFIG_TOKEN)); }, token: HttpHelper, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvaHR0cC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFLckUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFNdEIsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7O0lBcEJDLG9DQUE2Qjs7SUFDN0Isa0NBQTJCOztJQUMzQixrQ0FBMkI7O0lBQzNCLGtDQUEyQjs7O0FBb0I3QixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsb0JBQW9COzs7OztJQUU5RCxTQUFTLENBQUMsQ0FBUztRQUNqQixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQVM7UUFDbkIsT0FBTyxrQkFBa0IsQ0FB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QyxRQUFRLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTt3QkFFekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ25EO3lCQUFNO3dCQUVMLG9DQUFvQzt3QkFDcEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQ25DO2lCQUVGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBRVosQ0FBQzs7O1lBaEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQTNEUSxVQUFVO1lBaUVvQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs0Q0FDbEIsTUFBTSxTQUFDLGdCQUFnQjs7Ozs7SUFKcEMsK0JBQThCOzs7OztJQVM5QixtQ0FBOEI7O0lBUGxCLGlDQUE4Qjs7Ozs7SUFDOUIsZ0NBQStDOzs7OztJQUMvQyxnQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgaWNlcG9pbnQxOTk5IG9uIDcvMzEvMTYuXG4gKi9cblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzRGF0ZSwgaXNPYmplY3QsIGlzVW5kZWZpbmVkIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFQSV9DT05GSUdfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL2FwaS1jb25maWctdG9rZW4nO1xuaW1wb3J0IHsgQ3JlYXRlUGFyYW1zLCBTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FueS1vYmplY3QuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwaUNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSnNvblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9qc29uLXJlc3BvbnNlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbiB7XG4gIHB1YmxpYyBfYWNjZXNzX3Rva2VuOiBzdHJpbmc7XG4gIHB1YmxpYyBfdG9rZW5fdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgX2V4cGlyZXNfaW46IG51bWJlcjtcbiAgcHVibGljIF9jcmVhdGVkX2F0OiBudW1iZXI7XG5cbiAgZ2V0IGFjY2Vzc190b2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NfdG9rZW47XG4gIH1cblxuICBnZXQgdG9rZW5fdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90b2tlbl90eXBlO1xuICB9XG5cbiAgZ2V0IGV4cGlyZXNfaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwaXJlc19pbjtcbiAgfVxuXG4gIGdldCBjcmVhdGVkX2F0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRfYXQ7XG4gIH1cbn1cblxuLy8gY3VzdG9tIHNlcmlhbGl6ZSBlbmNvZGVyXG5leHBvcnQgY2xhc3MgTXlIdHRwVXJsRW5jb2RpbmdDb2RlYyBleHRlbmRzIEh0dHBVcmxFbmNvZGluZ0NvZGVjIHtcblxuICBlbmNvZGVLZXkoazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICB9XG5cbiAgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc2VyaWFsaXplVmFsdWUodikpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXJpYWxpemVWYWx1ZSh2OiBhbnkpOiBhbnkge1xuICAgIGlmIChpc09iamVjdCh2KSkge1xuICAgICAgcmV0dXJuIGlzRGF0ZSh2KSA/IHYudG9JU09TdHJpbmcoKSA6IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgIH1cbiAgICBpZiAodiA9PT0gbnVsbCB8fCBpc1VuZGVmaW5lZCh2KSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfVxuXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBIZWxwZXIge1xuXG4gIGFwaUNvbmZpZzogQXBpQ29uZmlnSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwX2NsaWVudDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgICAgICAgICAgIEBJbmplY3QoQVBJX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBhcGlfY29uZmlnOiBBcGlDb25maWdJbnRlcmZhY2UpIHtcbiAgICB0aGlzLmFwaUNvbmZpZyA9IGFwaV9jb25maWc7XG4gIH1cblxuICAvLyDlrZjlgqh0b2tlblxuICBwcml2YXRlIF9hY2Nlc3NfdG9rZW46IHN0cmluZztcblxuICBnZXQgYWNjZXNzX3Rva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyAodGhpcy5fYWNjZXNzX3Rva2VuIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKSkgOiAnJztcbiAgfVxuXG4gIHNldCBhY2Nlc3NfdG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc190b2tlbiA9IHZhbHVlO1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPIOacieW+heS8mOWMliByeGpzXG4gICAqIOWwgeijheiHquWumuS5iWdldFxuICAgKi9cbiAgcHVibGljIEFVVEhfSFRUUF9HRVQ8VD4odXJsOiBzdHJpbmcsIHBhcmFtczogU2VhcmNoUGFyYW1zID0ge30sIGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSkpOiBPYnNlcnZhYmxlPEpzb25SZXNwb25zZTxUPj4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7aGVhZGVyc307XG4gICAgcmV0dXJuIHRoaXMuaHR0cF9jbGllbnQuZ2V0PEpzb25SZXNwb25zZTxUPj4odXJsLCB7XG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgZW5jb2RlcjogbmV3IE15SHR0cFVybEVuY29kaW5nQ29kZWMoKSxcbiAgICAgICAgZnJvbU9iamVjdDogcGFyYW1zXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIEFVVEhfSFRUUF9ERUxFVEU8VD4odXJsOiBzdHJpbmcsIHBhcmFtczogU2VhcmNoUGFyYW1zID0ge30sIGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSkpOiBPYnNlcnZhYmxlPEpzb25SZXNwb25zZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBfY2xpZW50LmRlbGV0ZTxKc29uUmVzcG9uc2U8VD4+KHVybCwge1xuICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgIGVuY29kZXI6IG5ldyBNeUh0dHBVcmxFbmNvZGluZ0NvZGVjKCksXG4gICAgICAgIGZyb21PYmplY3Q6IHBhcmFtc1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBBVVRIX0hUVFBfUE9TVDxUPih1cmw6IHN0cmluZywgcGFyYW1zOiBDcmVhdGVQYXJhbXMgPSB7fSwgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtoZWFkZXJzfTtcbiAgICByZXR1cm4gdGhpcy5odHRwX2NsaWVudC5wb3N0PEpzb25SZXNwb25zZTxUPj4odXJsLCBwYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIEFVVEhfSFRUUF9QVVQ8VD4odXJsOiBzdHJpbmcsIGJvZHk6IE9iamVjdCwgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtoZWFkZXJzfTtcbiAgICByZXR1cm4gdGhpcy5odHRwX2NsaWVudC5wdXQ8SnNvblJlc3BvbnNlPFQ+Pih1cmwsIGJvZHksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIEFVVEhfSFRUUF9VUExPQURfUFVUPFQ+KHVybDogc3RyaW5nLCBib2R5OiBPYmplY3QsIHByZWZpeDogc3RyaW5nID0gJ3VwZGF0ZScsIGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkpOiBPYnNlcnZhYmxlPEpzb25SZXNwb25zZTxUPj4ge1xuICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpIDogdGhpcy5hY2Nlc3NfdG9rZW4pIHx8IG51bGw7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgaGVhZGVycy5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaGVhZGVycy5zZXQoJ2VuY3J5cHQnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7aGVhZGVyc307XG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gdGhpcy5vYmplY3RUb0Zvcm1EYXRhKGJvZHksIG5ldyBGb3JtRGF0YSgpKTtcbiAgICByZXR1cm4gdGhpcy5odHRwX2NsaWVudC5wdXQ8SnNvblJlc3BvbnNlPFQ+Pih1cmwsIGZvcm1EYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBBVVRIX0hUVFBfVVBMT0FEX1BPU1Q8VD4odXJsOiBzdHJpbmcsIGJvZHk6IE9iamVjdCwgcHJlZml4OiBzdHJpbmcgPSAndXBkYXRlJywgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKSk6IE9ic2VydmFibGU8SnNvblJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykgOiB0aGlzLmFjY2Vzc190b2tlbikgfHwgbnVsbDtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBjb25zdCBvcHRpb25zID0ge2hlYWRlcnN9O1xuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IHRoaXMub2JqZWN0VG9Gb3JtRGF0YShib2R5LCBuZXcgRm9ybURhdGEoKSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cF9jbGllbnQucG9zdDxKc29uUmVzcG9uc2U8VD4+KHVybCwgZm9ybURhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8g5bCG5a+56LGh5oiW5pWw57uE6L2s5o2i5oiQZm9ybWRhdGHnmoTmoLzlvI9cbiAgb2JqZWN0VG9Gb3JtRGF0YShvYmo6IG9iamVjdCwgZm9ybTogRm9ybURhdGEsIG5hbWVzcGFjZTogc3RyaW5nID0gJycpOiBGb3JtRGF0YSB7XG4gICAgY29uc3QgZmQgPSBmb3JtIHx8IG5ldyBGb3JtRGF0YSgpO1xuICAgIGxldCBmb3JtS2V5O1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICEoaXRlbSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5vYmplY3RUb0Zvcm1EYXRhKGl0ZW0sIGZkLCBgJHtuYW1lc3BhY2V9W11gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoYCR7bmFtZXNwYWNlfVtdYCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcblxuICAgICAgICAgIGZvcm1LZXkgPSBuYW1lc3BhY2UgPyBgJHtuYW1lc3BhY2V9WyR7cHJvcGVydHl9XWAgOiBwcm9wZXJ0eTtcbiAgICAgICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBidXQgbm90IGEgRmlsZSxcbiAgICAgICAgICAvLyB1c2UgcmVjdXJzaXZpdHkuXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0JyAmJiAhKG9ialtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGaWxlKSkge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdFRvRm9ybURhdGEob2JqW3Byb3BlcnR5XSwgZmQsIGZvcm1LZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYSBzdHJpbmcgb3IgYSBGaWxlIG9iamVjdFxuICAgICAgICAgICAgZmQuYXBwZW5kKGZvcm1LZXksIG9ialtwcm9wZXJ0eV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmZDtcblxuICB9XG5cbn1cbiJdfQ==