/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from as observableFrom } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
export class TokenInterceptor {
    /**
     * @param {?} http
     * @param {?} apiConfig
     * @param {?} platformId
     */
    constructor(http, apiConfig, platformId) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.platformId = platformId;
        this.skip_url = [];
    }
    /**
     * @return {?}
     */
    get access_token() {
        return this._access_token || localStorage.getItem(this.apiConfig.tokenKey);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set access_token(value) {
        this._access_token = value;
        localStorage.setItem(this.apiConfig.tokenKey, value);
    }
    /**
     * @return {?}
     */
    getToken() {
        /** @type {?} */
        const token_url = this.apiConfig.tokenUrl;
        /** @type {?} */
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        /** @type {?} */
        const options = { headers };
        /** @type {?} */
        const uid = this.apiConfig.apiUid;
        /** @type {?} */
        const secret = this.apiConfig.apiSecret;
        /** @type {?} */
        const body = JSON.stringify({ client_secret: secret, client_id: uid, grant_type: 'client_credentials' });
        return this.http.post(token_url, body, options);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isRequestAliOss(url) {
        /** @type {?} */
        let result = false;
        this.skip_url.forEach((/**
         * @param {?} skip
         * @return {?}
         */
        skip => {
            if (url.startsWith(skip)) {
                result = true;
            }
        }));
        return result;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        // console.info('Enter Token interceptor');
        if (req.url.indexOf(this.apiConfig.tokenUrl) !== -1 || this.isRequestAliOss(req.url)) {
            return next.handle(req);
        }
        else {
            // check if token exist
            /** @type {?} */
            const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem(this.apiConfig.tokenKey) : this.access_token) || null;
            // need get token first
            if (token == null || token.var3 + token.var2 < new Date().getTime() / 1000 || this.access_token === '{}' || token === {}) {
                /** @type {?} */
                const observer = observableFrom(this.getToken().toPromise()).pipe(switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    this.access_token = JSON.stringify({
                        session_key: data[this.apiConfig.tokenKey],
                        var2: this.apiConfig.tokenExpiredIn,
                        var3: new Date()
                    });
                    return this.handleTokenReq(next, req);
                })));
                return observer;
            }
            else {
                return this.handleTokenReq(next, req);
            }
        }
    }
    /**
     * @param {?} next
     * @param {?} req
     * @return {?}
     */
    handleTokenReq(next, req) {
        /** @type {?} */
        const token = {};
        this.apiConfig.tokenParams.forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            token[param.name] = param.value();
        }));
        // tslint:disable-next-line:no-any
        /** @type {?} */
        const update_params = {};
        // check if it is get
        if (req.method === 'GET') {
            update_params.setParams = Object.assign({}, token);
        }
        // check if it is form data
        if (req.body instanceof FormData) {
            /** @type {?} */
            const body = req.body;
            // body.append('access_token', token.access_token);
            // body.append('user_session_key', token.user_session_key);
            this.apiConfig.tokenParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            param => {
                body.append(param.name, param.value());
            }));
            update_params.body = body;
        }
        else {
            update_params.body = Object.assign({}, req.body, token);
        }
        // its ok send it
        /** @type {?} */
        const secureReq = req.clone(Object.assign({}, update_params));
        return next.handle(secureReq);
    }
}
TokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenInterceptor.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG_TOKEN,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    TokenInterceptor.prototype.skip_url;
    /**
     * @type {?}
     * @private
     */
    TokenInterceptor.prototype._access_token;
    /** @type {?} */
    TokenInterceptor.prototype.http;
    /**
     * @type {?}
     * @private
     */
    TokenInterceptor.prototype.apiConfig;
    /**
     * @type {?}
     * @private
     */
    TokenInterceptor.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9yL3Rva2VuLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUEwQixXQUFXLEVBQWdDLE1BQU0sc0JBQXNCLENBQUM7QUFDckgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLElBQUksY0FBYyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFHM0IsWUFBbUIsSUFBZ0IsRUFDVyxTQUE2QixFQUNsQyxVQUFrQjtRQUZ4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ1csY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUozRCxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTWQsQ0FBQzs7OztJQUtELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJ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O0lBUGxCLGdDQUF1Qjs7Ozs7SUFDdkIscUNBQStEOzs7OztJQUMvRCxzQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSGVhZGVycywgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20gYXMgb2JzZXJ2YWJsZUZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFQSV9DT05GSUdfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL2FwaS1jb25maWctdG9rZW4nO1xuaW1wb3J0IHsgQXBpQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGktY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9qc29uLXJlc3BvbnNlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgc2tpcF91cmwgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgQEluamVjdChBUElfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwaUNvbmZpZzogQXBpQ29uZmlnSW50ZXJmYWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge1xuXG4gIH1cblxuICAvLyDlrZjlgqh0b2tlblxuICBwcml2YXRlIF9hY2Nlc3NfdG9rZW46IHN0cmluZztcblxuICBnZXQgYWNjZXNzX3Rva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc190b2tlbiB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmFwaUNvbmZpZy50b2tlbktleSk7XG4gIH1cblxuICBzZXQgYWNjZXNzX3Rva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2Nlc3NfdG9rZW4gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFwaUNvbmZpZy50b2tlbktleSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogT2JzZXJ2YWJsZTxUb2tlblJlc3BvbnNlPHN0cmluZz4+IHtcbiAgICBjb25zdCB0b2tlbl91cmwgPSB0aGlzLmFwaUNvbmZpZy50b2tlblVybDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtoZWFkZXJzfTtcbiAgICBjb25zdCB1aWQgPSB0aGlzLmFwaUNvbmZpZy5hcGlVaWQ7XG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5hcGlDb25maWcuYXBpU2VjcmV0O1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Y2xpZW50X3NlY3JldDogc2VjcmV0LCBjbGllbnRfaWQ6IHVpZCwgZ3JhbnRfdHlwZTogJ2NsaWVudF9jcmVkZW50aWFscyd9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VG9rZW5SZXNwb25zZTxzdHJpbmc+Pih0b2tlbl91cmwsIGJvZHksIG9wdGlvbnMpO1xuICB9XG5cbiAgaXNSZXF1ZXN0QWxpT3NzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgIHRoaXMuc2tpcF91cmwuZm9yRWFjaChza2lwID0+IHtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChza2lwKSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDx7IFt4OiBzdHJpbmddOiBzdHJpbmcgfT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8eyBbeDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0+PiB7XG4gICAgLy8gY29uc29sZS5pbmZvKCdFbnRlciBUb2tlbiBpbnRlcmNlcHRvcicpO1xuICAgIGlmIChyZXEudXJsLmluZGV4T2YodGhpcy5hcGlDb25maWcudG9rZW5VcmwpICE9PSAtMSB8fCB0aGlzLmlzUmVxdWVzdEFsaU9zcyhyZXEudXJsKSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGlmIHRva2VuIGV4aXN0XG4gICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuYXBpQ29uZmlnLnRva2VuS2V5KSA6IHRoaXMuYWNjZXNzX3Rva2VuKSB8fCBudWxsO1xuICAgICAgLy8gbmVlZCBnZXQgdG9rZW4gZmlyc3RcbiAgICAgIGlmICh0b2tlbiA9PSBudWxsIHx8IHRva2VuLnZhcjMgKyB0b2tlbi52YXIyIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwIHx8IHRoaXMuYWNjZXNzX3Rva2VuID09PSAne30nIHx8IHRva2VuID09PSB7fSkge1xuICAgICAgICBjb25zdCBvYnNlcnZlcjogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8eyBbeDogc3RyaW5nXTogc3RyaW5nIH0+PiA9IG9ic2VydmFibGVGcm9tKHRoaXMuZ2V0VG9rZW4oKS50b1Byb21pc2UoKSkucGlwZShzd2l0Y2hNYXAoKGRhdGE6IFRva2VuUmVzcG9uc2U8c3RyaW5nPikgPT4ge1xuICAgICAgICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2Vzc2lvbl9rZXk6IGRhdGFbdGhpcy5hcGlDb25maWcudG9rZW5LZXldLFxuICAgICAgICAgICAgdmFyMjogdGhpcy5hcGlDb25maWcudG9rZW5FeHBpcmVkSW4sXG4gICAgICAgICAgICB2YXIzOiBuZXcgRGF0ZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9rZW5SZXEobmV4dCwgcmVxKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb2tlblJlcShuZXh0LCByZXEpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBoYW5kbGVUb2tlblJlcShuZXh0OiBIdHRwSGFuZGxlciwgcmVxOiBIdHRwUmVxdWVzdDx7IFt4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfT4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx7IFt4OiBzdHJpbmddOiBzdHJpbmcgfT4+IHtcbiAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgIHRoaXMuYXBpQ29uZmlnLnRva2VuUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgdG9rZW5bcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCB1cGRhdGVfcGFyYW1zOiBhbnkgPSB7fTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGlzIGdldFxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgdXBkYXRlX3BhcmFtcy5zZXRQYXJhbXMgPSB7Li4udG9rZW59O1xuICAgIH1cbiAgICAvLyBjaGVjayBpZiBpdCBpcyBmb3JtIGRhdGFcbiAgICBpZiAocmVxLmJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xuICAgICAgLy8gYm9keS5hcHBlbmQoJ2FjY2Vzc190b2tlbicsIHRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAvLyBib2R5LmFwcGVuZCgndXNlcl9zZXNzaW9uX2tleScsIHRva2VuLnVzZXJfc2Vzc2lvbl9rZXkpO1xuICAgICAgdGhpcy5hcGlDb25maWcudG9rZW5QYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgIGJvZHkuYXBwZW5kKHBhcmFtLm5hbWUsIHBhcmFtLnZhbHVlKCkpO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGVfcGFyYW1zLmJvZHkgPSBib2R5O1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVfcGFyYW1zLmJvZHkgPSB7Li4ucmVxLmJvZHksIC4uLnRva2VufTtcbiAgICB9XG5cbiAgICAvLyBpdHMgb2sgc2VuZCBpdFxuICAgIGNvbnN0IHNlY3VyZVJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAuLi51cGRhdGVfcGFyYW1zXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHNlY3VyZVJlcSk7XG4gIH1cblxufVxuIl19