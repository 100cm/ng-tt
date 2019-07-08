/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from as observableFrom } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(http, apiConfig, platformId) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.platformId = platformId;
        this.skip_url = [];
    }
    Object.defineProperty(TokenInterceptor.prototype, "access_token", {
        get: /**
         * @return {?}
         */
        function () {
            return this._access_token || localStorage.getItem(this.apiConfig.tokenKey);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._access_token = value;
            localStorage.setItem(this.apiConfig.tokenKey, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TokenInterceptor.prototype.getToken = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var token_url = this.apiConfig.tokenUrl;
        /** @type {?} */
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        /** @type {?} */
        var options = { headers: headers };
        /** @type {?} */
        var uid = this.apiConfig.apiUid;
        /** @type {?} */
        var secret = this.apiConfig.apiSecret;
        /** @type {?} */
        var body = JSON.stringify({ client_secret: secret, client_id: uid, grant_type: 'client_credentials' });
        return this.http.post(token_url, body, options);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    TokenInterceptor.prototype.isRequestAliOss = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var result = false;
        this.skip_url.forEach((/**
         * @param {?} skip
         * @return {?}
         */
        function (skip) {
            if (url.startsWith(skip)) {
                result = true;
            }
        }));
        return result;
    };
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    TokenInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        // console.info('Enter Token interceptor');
        if (req.url.indexOf(this.apiConfig.tokenUrl) !== -1 || this.isRequestAliOss(req.url)) {
            return next.handle(req);
        }
        else {
            // check if token exist
            /** @type {?} */
            var token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem(this.apiConfig.tokenKey) : this.access_token) || null;
            // need get token first
            if (token == null || token.var3 + token.var2 < new Date().getTime() / 1000 || this.access_token === '{}' || token === {}) {
                /** @type {?} */
                var observer = observableFrom(this.getToken().toPromise()).pipe(switchMap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.access_token = JSON.stringify({
                        session_key: data[_this.apiConfig.tokenKey],
                        var2: _this.apiConfig.tokenExpiredIn,
                        var3: new Date()
                    });
                    return _this.handleTokenReq(next, req);
                })));
                return observer;
            }
            else {
                return this.handleTokenReq(next, req);
            }
        }
    };
    /**
     * @param {?} next
     * @param {?} req
     * @return {?}
     */
    TokenInterceptor.prototype.handleTokenReq = /**
     * @param {?} next
     * @param {?} req
     * @return {?}
     */
    function (next, req) {
        /** @type {?} */
        var token = {};
        this.apiConfig.tokenParams.forEach((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            token[param.name] = param.value();
        }));
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var update_params = {};
        // check if it is get
        if (req.method === 'GET') {
            update_params.setParams = tslib_1.__assign({}, token);
        }
        // check if it is form data
        if (req.body instanceof FormData) {
            /** @type {?} */
            var body_1 = req.body;
            // body.append('access_token', token.access_token);
            // body.append('user_session_key', token.user_session_key);
            this.apiConfig.tokenParams.forEach((/**
             * @param {?} param
             * @return {?}
             */
            function (param) {
                body_1.append(param.name, param.value());
            }));
            update_params.body = body_1;
        }
        else {
            update_params.body = tslib_1.__assign({}, req.body, token);
        }
        // its ok send it
        /** @type {?} */
        var secureReq = req.clone(tslib_1.__assign({}, update_params));
        return next.handle(secureReq);
    };
    TokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TokenInterceptor.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [API_CONFIG_TOKEN,] }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return TokenInterceptor;
}());
export { TokenInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9yL3Rva2VuLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBMEIsV0FBVyxFQUFnQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxJQUFJLGNBQWMsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJckU7SUFJRSwwQkFBbUIsSUFBZ0IsRUFDVyxTQUE2QixFQUNsQyxVQUFrQjtRQUZ4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ1csY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUozRCxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBTWQsQ0FBQztJQUtELHNCQUFJLDBDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7OztRQUVELFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FMQTs7OztJQU9ELG1DQUFROzs7SUFBUjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFROztZQUNuQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQzs7WUFDL0QsT0FBTyxHQUFHLEVBQUMsT0FBTyxTQUFBLEVBQUM7O1lBQ25CLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07O1lBQzNCLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7O1lBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO1FBQ3RHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXdCLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLEdBQVc7O1lBQ3JCLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTtZQUN4QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsb0NBQVM7Ozs7O0lBQVQsVUFBVSxHQUF5QyxFQUFFLElBQWlCO1FBQXRFLGlCQXdCQztRQXZCQywyQ0FBMkM7UUFDM0MsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNOzs7Z0JBRUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJO1lBQ3hJLHVCQUF1QjtZQUN2QixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7O29CQUNsSCxRQUFRLEdBQW1ELGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQTJCO29CQUN0SixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7d0JBQzFDLElBQUksRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7d0JBQ25DLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtxQkFDakIsQ0FBQyxDQUFDO29CQUNILE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsRUFBQyxDQUFDO2dCQUNILE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdkM7U0FFRjtJQUVILENBQUM7Ozs7OztJQUVELHlDQUFjOzs7OztJQUFkLFVBQWUsSUFBaUIsRUFBRSxHQUFrRDs7WUFDNUUsS0FBSyxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQzs7O1lBRUcsYUFBYSxHQUFRLEVBQUU7UUFFN0IscUJBQXFCO1FBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDeEIsYUFBYSxDQUFDLFNBQVMsd0JBQU8sS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFDRCwyQkFBMkI7UUFDM0IsSUFBSSxHQUFHLENBQUMsSUFBSSxZQUFZLFFBQVEsRUFBRTs7Z0JBQzFCLE1BQUksR0FBRyxHQUFHLENBQUMsSUFBSTtZQUNyQixtREFBbUQ7WUFDbkQsMkRBQTJEO1lBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ3RDLE1BQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztZQUNILGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxhQUFhLENBQUMsSUFBSSx3QkFBTyxHQUFHLENBQUMsSUFBSSxFQUFLLEtBQUssQ0FBQyxDQUFDO1NBQzlDOzs7WUFHSyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssc0JBQ3RCLGFBQWEsRUFDaEI7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBbEdGLFVBQVU7Ozs7Z0JBUkYsVUFBVTtnREFhSixNQUFNLFNBQUMsZ0JBQWdCO2dCQUNpQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7SUE4RmpDLHVCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0FuR1ksZ0JBQWdCOzs7SUFDM0Isb0NBQWM7Ozs7O0lBU2QseUNBQThCOztJQVBsQixnQ0FBdUI7Ozs7O0lBQ3ZCLHFDQUErRDs7Ozs7SUFDL0Qsc0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEhlYWRlcnMsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tIGFzIG9ic2VydmFibGVGcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBUElfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi4vaW5qZWN0LXRva2Vucy9hcGktY29uZmlnLXRva2VuJztcbmltcG9ydCB7IEFwaUNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvanNvbi1yZXNwb25zZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHNraXBfdXJsID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIEBJbmplY3QoQVBJX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBhcGlDb25maWc6IEFwaUNvbmZpZ0ludGVyZmFjZSxcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcblxuICB9XG5cbiAgLy8g5a2Y5YKodG9rZW5cbiAgcHJpdmF0ZSBfYWNjZXNzX3Rva2VuOiBzdHJpbmc7XG5cbiAgZ2V0IGFjY2Vzc190b2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NfdG9rZW4gfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hcGlDb25maWcudG9rZW5LZXkpO1xuICB9XG5cbiAgc2V0IGFjY2Vzc190b2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZXNzX3Rva2VuID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hcGlDb25maWcudG9rZW5LZXksIHZhbHVlKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IE9ic2VydmFibGU8VG9rZW5SZXNwb25zZTxzdHJpbmc+PiB7XG4gICAgY29uc3QgdG9rZW5fdXJsID0gdGhpcy5hcGlDb25maWcudG9rZW5Vcmw7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7aGVhZGVyc307XG4gICAgY29uc3QgdWlkID0gdGhpcy5hcGlDb25maWcuYXBpVWlkO1xuICAgIGNvbnN0IHNlY3JldCA9IHRoaXMuYXBpQ29uZmlnLmFwaVNlY3JldDtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe2NsaWVudF9zZWNyZXQ6IHNlY3JldCwgY2xpZW50X2lkOiB1aWQsIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFRva2VuUmVzcG9uc2U8c3RyaW5nPj4odG9rZW5fdXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuXG4gIGlzUmVxdWVzdEFsaU9zcyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICB0aGlzLnNraXBfdXJsLmZvckVhY2goc2tpcCA9PiB7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoc2tpcCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8eyBbeDogc3RyaW5nXTogc3RyaW5nIH0+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PHsgW3g6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9Pj4ge1xuICAgIC8vIGNvbnNvbGUuaW5mbygnRW50ZXIgVG9rZW4gaW50ZXJjZXB0b3InKTtcbiAgICBpZiAocmVxLnVybC5pbmRleE9mKHRoaXMuYXBpQ29uZmlnLnRva2VuVXJsKSAhPT0gLTEgfHwgdGhpcy5pc1JlcXVlc3RBbGlPc3MocmVxLnVybCkpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayBpZiB0b2tlbiBleGlzdFxuICAgICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmFwaUNvbmZpZy50b2tlbktleSkgOiB0aGlzLmFjY2Vzc190b2tlbikgfHwgbnVsbDtcbiAgICAgIC8vIG5lZWQgZ2V0IHRva2VuIGZpcnN0XG4gICAgICBpZiAodG9rZW4gPT0gbnVsbCB8fCB0b2tlbi52YXIzICsgdG9rZW4udmFyMiA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCB8fCB0aGlzLmFjY2Vzc190b2tlbiA9PT0gJ3t9JyB8fCB0b2tlbiA9PT0ge30pIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXI6IE9ic2VydmFibGU8SHR0cEV2ZW50PHsgW3g6IHN0cmluZ106IHN0cmluZyB9Pj4gPSBvYnNlcnZhYmxlRnJvbSh0aGlzLmdldFRva2VuKCkudG9Qcm9taXNlKCkpLnBpcGUoc3dpdGNoTWFwKChkYXRhOiBUb2tlblJlc3BvbnNlPHN0cmluZz4pID0+IHtcbiAgICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlc3Npb25fa2V5OiBkYXRhW3RoaXMuYXBpQ29uZmlnLnRva2VuS2V5XSxcbiAgICAgICAgICAgIHZhcjI6IHRoaXMuYXBpQ29uZmlnLnRva2VuRXhwaXJlZEluLFxuICAgICAgICAgICAgdmFyMzogbmV3IERhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRva2VuUmVxKG5leHQsIHJlcSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9rZW5SZXEobmV4dCwgcmVxKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlVG9rZW5SZXEobmV4dDogSHR0cEhhbmRsZXIsIHJlcTogSHR0cFJlcXVlc3Q8eyBbeDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8eyBbeDogc3RyaW5nXTogc3RyaW5nIH0+PiB7XG4gICAgY29uc3QgdG9rZW4gPSB7fTtcbiAgICB0aGlzLmFwaUNvbmZpZy50b2tlblBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIHRva2VuW3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWUoKTtcbiAgICB9KTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgdXBkYXRlX3BhcmFtczogYW55ID0ge307XG5cbiAgICAvLyBjaGVjayBpZiBpdCBpcyBnZXRcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHVwZGF0ZV9wYXJhbXMuc2V0UGFyYW1zID0gey4uLnRva2VufTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgaXQgaXMgZm9ybSBkYXRhXG4gICAgaWYgKHJlcS5ib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgICAgIC8vIGJvZHkuYXBwZW5kKCdhY2Nlc3NfdG9rZW4nLCB0b2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgLy8gYm9keS5hcHBlbmQoJ3VzZXJfc2Vzc2lvbl9rZXknLCB0b2tlbi51c2VyX3Nlc3Npb25fa2V5KTtcbiAgICAgIHRoaXMuYXBpQ29uZmlnLnRva2VuUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICBib2R5LmFwcGVuZChwYXJhbS5uYW1lLCBwYXJhbS52YWx1ZSgpKTtcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlX3BhcmFtcy5ib2R5ID0gYm9keTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlX3BhcmFtcy5ib2R5ID0gey4uLnJlcS5ib2R5LCAuLi50b2tlbn07XG4gICAgfVxuXG4gICAgLy8gaXRzIG9rIHNlbmQgaXRcbiAgICBjb25zdCBzZWN1cmVSZXEgPSByZXEuY2xvbmUoe1xuICAgICAgLi4udXBkYXRlX3BhcmFtc1xuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShzZWN1cmVSZXEpO1xuICB9XG5cbn1cbiJdfQ==