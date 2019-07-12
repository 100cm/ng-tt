import { __extends, __values, __assign } from 'tslib';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HttpUrlEncodingCodec, HttpHeaders, HttpParams, HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, Injectable, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, NgModule, Component, Input, Optional, SkipSelf, EventEmitter, Output, Pipe, forwardRef } from '@angular/core';
import { isObject, isDate, isUndefined } from 'lodash';
import { from, BehaviorSubject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { AT_I18N, zh_CN, AtModule } from 'at-ng';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var API_CONFIG_TOKEN = new InjectionToken('tt-api-config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
// custom serialize encoder
var 
// custom serialize encoder
MyHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(MyHttpUrlEncodingCodec, _super);
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
                for (var obj_1 = __values(obj), obj_1_1 = obj_1.next(); !obj_1_1.done; obj_1_1 = obj_1.next()) {
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
    /** @nocollapse */ HttpHelper.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpHelper_Factory() { return new HttpHelper(ɵɵinject(HttpClient), ɵɵinject(PLATFORM_ID), ɵɵinject(API_CONFIG_TOKEN)); }, token: HttpHelper, providedIn: "root" });
    return HttpHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SIGN_OUT_URL_TOKEN = new InjectionToken('tt_sign_out_url');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                var observer = from(this.getToken().toPromise()).pipe(switchMap((/**
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
            update_params.setParams = __assign({}, token);
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
            update_params.body = __assign({}, req.body, token);
        }
        // its ok send it
        /** @type {?} */
        var secureReq = req.clone(__assign({}, update_params));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor(sign_out_url, router) {
        this.sign_out_url = sign_out_url;
        this.router = router;
        this.skip_urls = ['/api/oauth/token.json'];
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ResponseInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        return next.handle(req).pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return (event instanceof HttpResponse); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.skip_urls.find((/**
             * @param {?} url
             * @return {?}
             */
            function (url) { return event.url.indexOf(url) !== -1; }))) {
                return event;
            }
            else {
                return event.clone({ body: _this.handleResponse(event) });
            }
        })));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ResponseInterceptor.prototype.handleResponse = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var body = event.body;
        /** @type {?} */
        var clone_body = body;
        if (body.status && body.status.code === '40100') {
            localStorage.clear();
            this.router.navigate([this.sign_out_url]);
            clone_body = {};
        }
        if (body.status && body.status.code === '40200') ;
        body.status && body.status.code !== '20000' ?
            clone_body = body
            :
                // @ts-ignore
                clone_body = __assign({ status: body.status }, body.data) || body;
        return clone_body;
    };
    ResponseInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResponseInterceptor.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [SIGN_OUT_URL_TOKEN,] }] },
        { type: Router }
    ]; };
    return ResponseInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TtInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];
var TtHttpModule = /** @class */ (function () {
    function TtHttpModule() {
    }
    /**
     * @param {?} api_config
     * @param {?=} sign_out_url
     * @return {?}
     */
    TtHttpModule.config = /**
     * @param {?} api_config
     * @param {?=} sign_out_url
     * @return {?}
     */
    function (api_config, sign_out_url) {
        return {
            ngModule: TtHttpModule,
            providers: [{ provide: API_CONFIG_TOKEN, useValue: api_config }, {
                    provide: SIGN_OUT_URL_TOKEN,
                    useValue: sign_out_url
                }]
        };
    };
    TtHttpModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return TtHttpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TtI18nComponent = /** @class */ (function () {
    function TtI18nComponent() {
        this.t = '';
    }
    /**
     * @return {?}
     */
    TtI18nComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TtI18nComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-i18n',
                    template: '<span>{{ t |  I18n | async}}</span>'
                }] }
    ];
    /** @nocollapse */
    TtI18nComponent.ctorParameters = function () { return []; };
    TtI18nComponent.propDecorators = {
        t: [{ type: Input }]
    };
    return TtI18nComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var I18N_TOKEN = new InjectionToken('tt-i18n');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var zhCN = {
    locale: 'zh-CN',
    Message: {
        no_data: '暂无数据',
        data_not_exist: '数据不存在',
        handle_success: '操作成功',
        confirm_delete: '确认删除?',
        handle_fail: '操作失败'
    },
    Button: {
        search: '搜索',
        reset: '重置',
        submit: '提交',
        create: '新增',
        more_filter: '更多筛选项'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ I18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function I18nService_Factory() { return new I18nService(ɵɵinject(I18N_TOKEN)); }, token: I18nService, providedIn: "root" });
    return I18nService;
}());
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
function LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new I18nService(locale);
}
/** @type {?} */
var I18N_SERVICE_PROVIDER = {
    provide: I18nService,
    useFactory: LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), I18nService], I18N_TOKEN]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
DataBaseComponent = /** @class */ (function () {
    function DataBaseComponent() {
        this._page = '1';
        this._per = '10';
        this.editing_data = {};
        this.search_params = {};
        this.search_columns = [];
        this.columns = [];
    }
    Object.defineProperty(DataBaseComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return +this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBaseComponent.prototype, "per", {
        get: /**
         * @return {?}
         */
        function () {
            return +this._per;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._per = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.loadData();
    };
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    DataBaseComponent.prototype.setData = /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        this.datas = data[key] || [];
        this.total_count = data.total_count;
        this.total_pages = data.total_pages;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    DataBaseComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page = page;
        this.loadData();
    };
    /**
     * @param {?} size
     * @return {?}
     */
    DataBaseComponent.prototype.pageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.per = size;
        this.loadData();
    };
    Object.defineProperty(DataBaseComponent.prototype, "send_param", {
        get: /**
         * @return {?}
         */
        function () {
            return __assign({}, this.search_params, { page: this._page, per: this._per });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    DataBaseComponent.prototype.edit = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.editing_data = data;
    };
    return DataBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonDataTableComponent = /** @class */ (function (_super) {
    __extends(CommonDataTableComponent, _super);
    function CommonDataTableComponent() {
        var _this = _super.call(this) || this;
        _this.columns = [];
        _this.Model = '';
        _this.resource = '';
        _this.search_columns = [];
        _this.prefixRoute = '/dashboard';
        // 搜索参数
        _this.search_params = {};
        _this.onSearch = new EventEmitter();
        _this.search_paramsChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadData();
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data_service[this.resource](this.send_param).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setData(_this.resource, data);
        }));
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        _super.prototype.search.call(this);
        this.onSearch.emit();
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.changeSearchParams = /**
     * @return {?}
     */
    function () {
        this.search_paramsChange.emit(this.search_params);
    };
    Object.defineProperty(CommonDataTableComponent.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this.Model.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    CommonDataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-common-data-table',
                    template: "\n    <tt-search-group [search_columns]=\"search_columns\" [extra_search]=\"extra_search\" [(ngModel)]=\"search_params\"\n                     (ngModelChange)=\"changeSearchParams()\"\n                     (onSearch)=\"search()\"></tt-search-group>\n    <at-table>\n      <thead at-thead>\n      <tr>\n        <th *ngFor=\"let item of columns\" at-th style=\"cursor: text;\">\n          <tt-i18n [t]=\"'Model.'+ Model+'.'+item.name\"></tt-i18n>\n        </th>\n        <th at-th>\u64CD\u4F5C</th>\n      </tr>\n      </thead>\n      <tbody at-tbody>\n      <tr at-tbody-tr *ngFor=\"let item of datas\"><!---->\n        <td at-td *ngFor=\"let column of columns\">\n          <ng-container *ngIf=\"column.resource_key\">\n            <a\n              [routerLink]=\"prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)\">\n              {{item | nestedJsonKey : column.key}}</a>\n          </ng-container>\n          <ng-container *ngIf=\"!column.resource_key\">\n            <ng-container *ngIf=\"column.array\">\n              <ng-container\n                *ngFor=\"let column_array_item of  (item | nestedJsonKey : column.key);last as isLast\">\n                <span>{{column.dictionary ? column.dictionary[column_array_item[column.array_key]] : column_array_item[column.array_key]}} </span>\n                <at-divider [vertical]=\"true\" *ngIf=\"!isLast\"></at-divider>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"!column.array\">\n              {{column.dictionary ? column.dictionary[(item | nestedJsonKey : column.key)] : (item | nestedJsonKey : column.key)}}\n            </ng-container>\n          </ng-container>\n        </td>\n        <td at-td>\n          <a [routerLink]=\"prefixRoute +'/'+resource +'/edit/' + item.id\">\n            <tt-i18n [t]=\"'Model.Handle.edit'\"></tt-i18n>\n          </a>\n          <at-divider [vertical]=\"true\" *ngIf=\"handle_columns\"></at-divider>\n          <ng-template [ngTemplateOutlet]=\"handle_columns\" [ngTemplateOutletContext]=\"{$implicit: item}\"></ng-template>\n        </td>\n      </tr>\n\n      </tbody>\n      <div footer>\n        <tt-empty-data [data]=\"datas\"></tt-empty-data>\n        <div class=\"page-container\">\n          <at-pagination [atPageSizer]=\"true\" (pageSizeChange)=\"pageSizeChange($event)\" [pageSize]=\"per\"\n                         [atQuickJump]=\"true\"\n                         [atPageIndex]=\"page\"\n                         [total]=\"total_count\"\n                         (pageIndexChange)=\"pageChange($event)\"></at-pagination>\n        </div>\n      </div>\n    </at-table>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CommonDataTableComponent.ctorParameters = function () { return []; };
    CommonDataTableComponent.propDecorators = {
        data_service: [{ type: Input }],
        columns: [{ type: Input }],
        Model: [{ type: Input }],
        resource: [{ type: Input }],
        search_columns: [{ type: Input }],
        handle_columns: [{ type: Input }],
        extra_search: [{ type: Input }],
        prefixRoute: [{ type: Input }],
        search_params: [{ type: Input }],
        onSearch: [{ type: Output }],
        search_paramsChange: [{ type: Output }]
    };
    return CommonDataTableComponent;
}(DataBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TtI18nModule = /** @class */ (function () {
    function TtI18nModule() {
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    TtI18nModule.forRoot = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            ngModule: TtI18nModule,
            providers: [{ provide: AT_I18N, useValue: zh_CN }, { provide: I18N_TOKEN, useValue: locale }]
        };
    };
    TtI18nModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TtI18nPipe,
                        TtI18nComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [TtI18nPipe, TtI18nComponent]
                },] }
    ];
    return TtI18nModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:no-any */
/**
 * @param {?} value
 * @return {?}
 */
function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchGroupComponent = /** @class */ (function () {
    function SearchGroupComponent() {
        this.search_columns = [];
        this.search_params = {};
        this.onSearch = new EventEmitter();
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.show_more = false;
        this.range_keys = {};
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    SearchGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SearchGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SearchGroupComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (isNotNil(obj)) {
            this.search_params = obj;
        }
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.onSearch.emit();
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.search_params = {};
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.range_keys = {};
        this.onChange(this.search_params);
    };
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.changeCreate = /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    function ($event, after) {
        this.search_params['search[between_created_at]'] = this.created_at_before + "," + this.created_at_after;
        this.onChange(this.search_params);
    };
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.changeUpdate = /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    function ($event, after) {
        this.search_params['search[between_updated_at]'] = this.updated_at_before + "," + this.updated_at_after;
        this.onChange(this.search_params);
    };
    /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.setRange = /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    function (value, key, after) {
        if (!this.range_keys[key]) {
            this.range_keys[key] = { before: '', after: '' };
        }
        this.range_keys[key][after] = value;
        this.search_params["search[between_" + key + "]"] = this.range_keys[key].before + " , " + this.range_keys[key].after;
        this.onChange(this.search_params);
    };
    SearchGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-search-group',
                    template: "\n    <div at-row class=\"search-bar-container\">\n      <div *ngFor=\"let item of search_columns;let i =index\" at-col [span]=\"item.type ==='range'? 11 : 5\"\n           [offset]=\" ((i) % 4) == 0 ? 0 : 1\">\n        <at-form-item>\n          <div at-col [span]=\"24\" class=\"search-label\">\n            {{ (\"Model.\" + item.name) | I18n | async}}\n          </div>\n          <at-form-control [span]=\"24\">\n            <ng-container [ngSwitch]=\"item.type\">\n              <input class=\"search-input\" *ngSwitchCase=\"'input'\" at-input\n                     [(ngModel)]=\"search_params['search[like_'+item.key +']']\">\n              <atInput class=\"search-input\" *ngSwitchCase=\"'number'\"\n                       [atType]=\"'number'\"\n                       [(ngModel)]=\"search_params['search['+item.key +']']\">\n              </atInput>\n              <at-select [multiple]=\"item.multiple\" [(ngModel)]=\"search_params['search['+item.key +']']\" *ngSwitchCase=\"'select'\"\n                         style=\"width: 290px\">\n                <at-option [atLabel]=\"'DataSource.all' | I18n | async\" [atValue]=\"''\"></at-option>\n                <at-option *ngFor=\"let option of  item.async ? (item.data_source | async) : item.data_source\"\n                           [atLabel]=\"option.name\"\n                           [atValue]=\"option.value\">\n                </at-option>\n              </at-select>\n              <ng-container *ngSwitchCase=\"'range'\">\n                <div at-row>\n                  <div at-col [span]=\"11\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.before\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'before')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"></atDatetimePicker>\n                  </div>\n                  <div at-col [span]=\"1\" style=\"  left: 1%;position: relative\">\n                    <at-divider [height]=\"3\"></at-divider>\n                  </div>\n                  <div at-col [span]=\"11\" [offset]=\"1\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.after\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'after')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"\n                                      [disableDate]=\"range_keys[item.key]?.before\"></atDatetimePicker>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </at-form-control>\n        </at-form-item>\n\n      </div>\n      <ng-template [ngTemplateOutlet]=\"extra_search\"></ng-template>\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <at-checkbox [label]=\"'Button.more_filter' | I18n | async\" [(ngModel)]=\"show_more\">\n          </at-checkbox>\n        </div>\n      </div>\n      <div *ngIf=\"show_more\" at-col [span]=\"24\">\n        <div at-row>\n          <div at-col [span]=\"11\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_after\" [disableDate]=\"created_at_before\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n          <div at-col [span]=\"11\" [offset]=\"1\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_after\" [disableDate]=\"updated_at_before\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n        </div>\n      </div>\n\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <button at-button (click)=\"search()\" [atType]=\"'primary'\">\n            <span><tt-i18n [t]=\"'Button.search'\"></tt-i18n></span>\n          </button>\n          <at-divider [vertical]=\"true\" [height]=\"20\"></at-divider>\n          <button at-button (click)=\"reset()\" [atType]=\"'primary'\" hollow>\n        <span>\n        <tt-i18n [t]=\"'Button.reset'\"></tt-i18n>\n      </span>\n          </button>\n          <ng-template [ngTemplateOutlet]=\"buttons\" ></ng-template>\n        </div>\n      </div>\n    </div>\n    <!--<div at-row class=\"filter-container\">-->\n    <!--<at-dropdown [trigger]=\"'click'\" [autoClose]=\"false\">-->\n    <!--<button at-dropdown at-button><span>\u7B5B\u9009\u5217\u8868</span></button>-->\n    <!--<ul at-drop-menu-list>-->\n    <!--<li at-drop-menu-item *ngFor=\"let item of search_columns\">-->\n    <!--{{ (\"Model.\" + item.name) | I18n | async}}-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--</at-dropdown>-->\n    <!--</div>-->\n  ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SearchGroupComponent; })),
                            multi: true
                        }],
                    styles: [".middle-line{padding-top:12px}"]
                }] }
    ];
    /** @nocollapse */
    SearchGroupComponent.ctorParameters = function () { return []; };
    SearchGroupComponent.propDecorators = {
        search_columns: [{ type: Input }],
        extra_form: [{ type: Input }],
        onSearch: [{ type: Output }],
        buttons: [{ type: Input }],
        extra_search: [{ type: Input }]
    };
    return SearchGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmptyDataComponent = /** @class */ (function () {
    function EmptyDataComponent() {
        this.data = [];
    }
    /**
     * @return {?}
     */
    EmptyDataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EmptyDataComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-empty-data',
                    template: "\n    <div *ngIf=\"(data || [] ).length === 0 || data === undefined || data === null\" class=\"empty-data-box\">\n      <div class=\"mb-empty-data\">\n        <img\n          src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNjQgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzIuMDAwMDAwLCAtMTMzNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgMTExNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDc4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjguMDAwMDAwLCAxNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlICBmaWxsPSIjRjVGNUY1IiBjeD0iMzIiIGN5PSIzMyIgcng9IjMyIiByeT0iNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LDEyLjc2MDU2MDQgTDM1Ljg1NDMwNDcsMS4yNTczOTYzMyBDMzUuMzY3NDQxNCwwLjQ3MzgyNjYwNSAzNC42NTU4Nzg5LDAgMzMuOTA2NzYxNywwIEwxMi4wOTMyMzgzLDAgQzExLjM0NDEyMTEsMCAxMC42MzI1NTg2LDAuNDczOTUwMjU1IDEwLjE0NTY5NTMsMS4yNTczOTYzMyBMMi42MTQ3OTcyN2UtMTIsMTIuNzYwNTYwNCBMMCwyMiBMNDYsMjIgTDQ2LDEyLjc2MDU2MDQgWiIgID48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjYxMzI4MTMsMTUuOTMxNSBDMzIuNjEzMjgxMywxNC4zMjU4NTExIDMzLjYwNjk1MzEsMTMuMDAwMjM0IDM0LjgzOTY5OTIsMTMgTDQ2LDEzIEw0NiwzMS4xMzcxMjc3IEM0NiwzMy4yNTg5NTc0IDQ0LjY3OTM4NjcsMzUgNDMuMDUwNDI5NywzNSBMMi45NDk1NzAzMSwzNSBDMS4zMjA1MjM0NCwzNSAwLDMzLjI1ODg0MDQgMCwzMS4xMzcxMjc3IEwwLDEzIEwxMS4xNjAzMDA4LDEzIEMxMi4zOTMwNDY5LDEzIDEzLjM4NjcxODgsMTQuMzIyODA4NSAxMy4zODY3MTg4LDE1LjkyODQ1NzQgTDEzLjM4NjcxODgsMTUuOTQ5NjM4MyBDMTMuMzg2NzE4OCwxNy41NTUyODcyIDE0LjM5MTcxMDksMTguODUxMTgwOSAxNS42MjQ0NTcsMTguODUxMTgwOSBMMzAuMzc1NTQzLDE4Ljg1MTE4MDkgQzMxLjYwODI4OTEsMTguODUxMTgwOSAzMi42MTMyODEzLDE3LjU0MzM1MTEgMzIuNjEzMjgxMywxNS45Mzc3MDIxIEwzMi42MTMyODEzLDE1LjkzMTUgWiIgIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\"\n          alt=\"empty\" class=\"ng-star-inserted\">\n      </div>\n      <div>\n        <p class=\"empty-description\">\n          <tt-i18n [t]=\"'Message.no_data'\"></tt-i18n>\n        </p>\n      </div>\n    </div>",
                    styles: [":host .mb-empty-data{width:100%;font-size:14px;line-height:22px;text-align:center}:host .empty-description{text-align:center;color:rgba(0,0,0,.45)}:host .empty-data-box{margin:32px 0}"]
                }] }
    ];
    /** @nocollapse */
    EmptyDataComponent.ctorParameters = function () { return []; };
    EmptyDataComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return EmptyDataComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TtComponentModule = /** @class */ (function () {
    function TtComponentModule() {
    }
    TtComponentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SearchGroupComponent, EmptyDataComponent],
                    imports: [
                        FormsModule,
                        TtI18nModule,
                        AtModule,
                        CommonModule
                    ],
                    exports: [SearchGroupComponent, EmptyDataComponent]
                },] }
    ];
    return TtComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TtDataTableModule = /** @class */ (function () {
    function TtDataTableModule() {
    }
    TtDataTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommonDataTableComponent, NestedJsonKeyPipe],
                    imports: [
                        AtModule,
                        FormsModule,
                        RouterModule,
                        TtI18nModule,
                        TtComponentModule,
                        CommonModule
                    ],
                    exports: [CommonDataTableComponent]
                },] }
    ];
    return TtDataTableModule;
}());

export { CommonDataTableComponent, DataBaseComponent, HttpHelper, I18nService, TtComponentModule, TtDataTableModule, TtHttpModule, TtI18nComponent, TtI18nModule, TtInterceptorProviders, zhCN, TokenInterceptor as ɵa, API_CONFIG_TOKEN as ɵb, ResponseInterceptor as ɵd, SIGN_OUT_URL_TOKEN as ɵe, TtI18nPipe as ɵf, I18nService as ɵg, I18N_TOKEN as ɵh, TtI18nComponent as ɵj, SearchGroupComponent as ɵk, EmptyDataComponent as ɵl, CommonDataTableComponent as ɵm, DataBaseComponent as ɵn, NestedJsonKeyPipe as ɵo };
//# sourceMappingURL=ng-tt.js.map
