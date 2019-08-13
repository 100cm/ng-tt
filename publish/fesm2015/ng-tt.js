import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HttpParams, HttpHeaders, HttpClient, HttpUrlEncodingCodec, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, Injectable, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, NgModule, Component, Input, Optional, SkipSelf, EventEmitter, Output, Pipe, forwardRef } from '@angular/core';
import { isObject, isDate, isUndefined } from 'lodash';
import { from, BehaviorSubject, forkJoin } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { AT_I18N, zh_CN, AtModule } from 'at-ng';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const API_CONFIG_TOKEN = new InjectionToken('tt-api-config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom serialize encoder
class MyHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
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
class HttpHelper {
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
/** @nocollapse */ HttpHelper.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpHelper_Factory() { return new HttpHelper(ɵɵinject(HttpClient), ɵɵinject(PLATFORM_ID), ɵɵinject(API_CONFIG_TOKEN)); }, token: HttpHelper, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SIGN_OUT_URL_TOKEN = new InjectionToken('tt_sign_out_url');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TokenInterceptor {
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
                const observer = from(this.getToken().toPromise()).pipe(switchMap((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponseInterceptor {
    /**
     * @param {?} sign_out_url
     * @param {?} router
     */
    constructor(sign_out_url, router) {
        this.sign_out_url = sign_out_url;
        this.router = router;
        this.skip_urls = ['/api/oauth/token.json'];
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => (event instanceof HttpResponse))), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.skip_urls.find((/**
             * @param {?} url
             * @return {?}
             */
            url => event.url.indexOf(url) !== -1))) {
                return event;
            }
            else {
                return event.clone({ body: this.handleResponse(event) });
            }
        })));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleResponse(event) {
        /** @type {?} */
        const body = event.body;
        /** @type {?} */
        let clone_body = body;
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
                clone_body = Object.assign({ status: body.status }, body.data) || body;
        return clone_body;
    }
}
ResponseInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResponseInterceptor.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [SIGN_OUT_URL_TOKEN,] }] },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TtInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];
class TtHttpModule {
    /**
     * @param {?} api_config
     * @param {?=} sign_out_url
     * @return {?}
     */
    static config(api_config, sign_out_url) {
        return {
            ngModule: TtHttpModule,
            providers: [{ provide: API_CONFIG_TOKEN, useValue: api_config }, {
                    provide: SIGN_OUT_URL_TOKEN,
                    useValue: sign_out_url
                }]
        };
    }
}
TtHttpModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TtI18nComponent {
    constructor() {
        this.t = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TtI18nComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-i18n',
                template: '<span>{{ t |  I18n | async}}</span>'
            }] }
];
/** @nocollapse */
TtI18nComponent.ctorParameters = () => [];
TtI18nComponent.propDecorators = {
    t: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const I18N_TOKEN = new InjectionToken('tt-i18n');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const zhCN = {
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
class I18nService {
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
/** @nocollapse */ I18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function I18nService_Factory() { return new I18nService(ɵɵinject(I18N_TOKEN)); }, token: I18nService, providedIn: "root" });
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
function LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new I18nService(locale);
}
/** @type {?} */
const I18N_SERVICE_PROVIDER = {
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
class DataBaseComponent {
    constructor() {
        this._page = '1';
        this._per = '10';
        this.editing_data = {};
        this.checkIndexes = [];
        this.checkAll = false;
        this.search_params = {};
        this.search_columns = [];
        this.columns = [];
    }
    /**
     * @return {?}
     */
    get page() {
        return +this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = value.toString();
    }
    /**
     * @return {?}
     */
    get per() {
        return +this._per;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set per(value) {
        this._per = value.toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    search() {
        this.loadData();
    }
    /**
     * @return {?}
     */
    loadData() {
    }
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    setData(key, data) {
        this.datas = data[key] || [];
        this.checkIndexes = this.datas.map((/**
         * @param {?} x
         * @return {?}
         */
        x => false));
        this.checkAll = false;
        this.total_count = data.total_count;
        this.total_pages = data.total_pages;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.page = page;
        this.loadData();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    pageSizeChange(size) {
        this.per = size;
        this.loadData();
    }
    /**
     * @return {?}
     */
    get send_param() {
        return Object.assign({}, this.search_params, { page: this._page, per: this._per });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    edit(data) {
        this.editing_data = data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonDataTableComponent extends DataBaseComponent {
    constructor() {
        super();
        this.columns = [];
        this.Model = '';
        this.resource = '';
        this.search_columns = [];
        this.edit_columns = [];
        this.prefixRoute = '/dashboard';
        // 搜索参数
        this.search_params = {};
        this.onSearch = new EventEmitter();
        this.search_paramsChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadData();
    }
    /**
     * @return {?}
     */
    loadData() {
        this.data_service[this.resource](this.send_param).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.setData(this.resource, data);
        }));
    }
    /**
     * @return {?}
     */
    search() {
        super.search();
        this.onSearch.emit();
    }
    /**
     * @return {?}
     */
    changeSearchParams() {
        this.search_paramsChange.emit(this.search_params);
    }
    /**
     * @return {?}
     */
    get model() {
        return this.Model.toLowerCase();
    }
    /**
     * @param {?} check
     * @return {?}
     */
    changeCheckIndex(check) {
        this.checkAll = this.checkIndexes.filter((/**
         * @param {?} index
         * @return {?}
         */
        index => index === true)).length === this.datas.length;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkList(value) {
        this.checkIndexes = this.checkIndexes.map((/**
         * @param {?} index
         * @return {?}
         */
        index => value));
    }
    /**
     * @return {?}
     */
    deleteAll() {
        // const obs = [];
        // this.checkIndexes.forEach((checked: boolean, index: number) => {
        //   if (checked === true) {
        //     const id = this.datas[index].id;
        //     const params = {
        //     };
        //     params[`${this.model}_id`] = id;
        //     this.data_service.delete().subscribe(data => {
        //       this.setData(this.resource, data);
        //     });
        //   }
        // });
    }
    /**
     * @param {?} update_params
     * @return {?}
     */
    batchUpdate(update_params) {
        /** @type {?} */
        const obs = [];
        this.checkIndexes.forEach((/**
         * @param {?} checked
         * @param {?} index
         * @return {?}
         */
        (checked, index) => {
            if (checked === true) {
                for (const key in update_params) {
                    if (update_params[key] === '') {
                        delete update_params[key];
                    }
                }
                /** @type {?} */
                const id = this.datas[index].id;
                /** @type {?} */
                const params = {
                    update: update_params
                };
                params[`${this.model}_id`] = id;
                obs.push(this.data_service.update(params));
            }
        }));
        forkJoin(obs).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log(data);
        }));
    }
}
CommonDataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-common-data-table',
                template: `
    <tt-search-group [search_columns]="search_columns" [extra_search]="extra_search" [(ngModel)]="search_params"
                     (delete)="deleteAll()"
                     (update)="batchUpdate($event)"
                     [edit_columns]="edit_columns"
                     (ngModelChange)="changeSearchParams()"
                     (onSearch)="search()"></tt-search-group>
    <at-table>
      <thead at-thead>
      <tr>
        <th at-th [atWidth]="20">
          <at-checkbox [(ngModel)]="checkAll" (changeCheck)="checkList($event)"></at-checkbox>
        </th>
        <th *ngFor="let item of columns" at-th style="cursor: text;">
          <tt-i18n [t]="'Model.'+ Model+'.'+item.name"></tt-i18n>
        </th>
        <th at-th>操作</th>
      </tr>
      </thead>
      <tbody at-tbody>
      <tr at-tbody-tr *ngFor="let item of datas;let i = index"><!---->
        <td at-td>
          <at-checkbox [(ngModel)]="checkIndexes[i]" (changeCheck)="changeCheckIndex($event)"></at-checkbox>
        </td>
        <td at-td *ngFor="let column of columns">
          <ng-container *ngIf="column.resource_key">
            <a
              [routerLink]="prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)">
              {{item | nestedJsonKey : column.key}}</a>
          </ng-container>
          <ng-container *ngIf="!column.resource_key">
            <ng-container *ngIf="column.array">
              <ng-container
                *ngFor="let column_array_item of  (item | nestedJsonKey : column.key);last as isLast">
                <span>{{column.dictionary ? column.dictionary[column_array_item[column.array_key]] : column_array_item[column.array_key]}} </span>
                <at-divider [vertical]="true" *ngIf="!isLast"></at-divider>
              </ng-container>
            </ng-container>
            <ng-container *ngIf="!column.array">
              {{column.dictionary ? column.dictionary[(item | nestedJsonKey : column.key)] : (item | nestedJsonKey : column.key)}}
            </ng-container>
          </ng-container>
        </td>
        <td at-td>
          <a [routerLink]="prefixRoute +'/'+resource +'/edit/' + item.id">
            <tt-i18n [t]="'Model.Handle.edit'"></tt-i18n>
          </a>
          <at-divider [vertical]="true" *ngIf="handle_columns"></at-divider>
          <ng-template [ngTemplateOutlet]="handle_columns" [ngTemplateOutletContext]="{$implicit: item}"></ng-template>
        </td>
      </tr>
      </tbody>
      <div footer>
        <tt-empty-data [data]="datas"></tt-empty-data>
        <div class="page-container">
          <at-pagination [atPageSizer]="true" (pageSizeChange)="pageSizeChange($event)" [pageSize]="per"
                         [atQuickJump]="true"
                         [atPageIndex]="page"
                         [total]="total_count"
                         (pageIndexChange)="pageChange($event)"></at-pagination>
        </div>
      </div>
    </at-table>
  `,
                styles: [""]
            }] }
];
/** @nocollapse */
CommonDataTableComponent.ctorParameters = () => [];
CommonDataTableComponent.propDecorators = {
    data_service: [{ type: Input }],
    columns: [{ type: Input }],
    Model: [{ type: Input }],
    resource: [{ type: Input }],
    search_columns: [{ type: Input }],
    edit_columns: [{ type: Input }],
    handle_columns: [{ type: Input }],
    extra_search: [{ type: Input }],
    prefixRoute: [{ type: Input }],
    search_params: [{ type: Input }],
    onSearch: [{ type: Output }],
    search_paramsChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TtI18nPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TtI18nModule {
    /**
     * @param {?} locale
     * @return {?}
     */
    static forRoot(locale) {
        return {
            ngModule: TtI18nModule,
            providers: [{ provide: AT_I18N, useValue: zh_CN }, { provide: I18N_TOKEN, useValue: locale }]
        };
    }
}
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
class SearchGroupComponent {
    constructor() {
        this.search_columns = [];
        this.search_params = {};
        this.onSearch = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.show_more = false;
        this.range_keys = {};
        this.edit_params = {};
        this.visible = false;
        this.edit_columns = [];
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isNotNil(obj)) {
            this.search_params = obj;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    search() {
        this.onSearch.emit();
    }
    /**
     * @return {?}
     */
    close() {
        this.visible = false;
    }
    /**
     * @return {?}
     */
    reset() {
        this.search_params = {};
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.range_keys = {};
        this.onChange(this.search_params);
    }
    /**
     * @return {?}
     */
    edit() {
        this.visible = true;
    }
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    changeCreate($event, after) {
        this.search_params['search[between_created_at]'] = `${this.created_at_before},${this.created_at_after}`;
        this.onChange(this.search_params);
    }
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    changeUpdate($event, after) {
        this.search_params['search[between_updated_at]'] = `${this.updated_at_before},${this.updated_at_after}`;
        this.onChange(this.search_params);
    }
    /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    setRange(value, key, after) {
        if (!this.range_keys[key]) {
            this.range_keys[key] = { before: '', after: '' };
        }
        this.range_keys[key][after] = value;
        this.search_params[`search[between_${key}]`] = `${this.range_keys[key].before} , ${this.range_keys[key].after}`;
        this.onChange(this.search_params);
    }
    /**
     * @return {?}
     */
    batchUpdate() {
        this.update.emit(this.edit_params);
        this.visible = false;
    }
    /**
     * @return {?}
     */
    batchDelete() {
        this.delete.emit();
    }
}
SearchGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-search-group',
                template: `
    <div at-row class="search-bar-container">
      <ng-template [ngTemplateOutlet]="search_template"></ng-template>
      <ng-template [ngTemplateOutlet]="extra_search"></ng-template>
      <div at-col [span]="24">
        <div style="margin-bottom: 24px">
          <at-checkbox [label]="'Button.more_filter' | I18n | async" [(ngModel)]="show_more">
          </at-checkbox>
        </div>
      </div>
      <div *ngIf="show_more" at-col [span]="24">
        <div at-row>
          <div at-col [span]="11">
            <at-form-item>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col [span]="24" class="search-label">
                    <tt-i18n [t]="'Model.Common.created_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="created_at_before" [format]="'YYYY-MM-DD'"
                      (ngModelChange)="changeCreate($event,'after')"
                      [choice_modal]="'date'"></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
              <div at-col [span]="2" class="middle-line">
                <at-divider [height]="3"></at-divider>
              </div>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col class="search-label" [span]="24">
                    <tt-i18n [t]="'Model.Common.created_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="created_at_after" [disableDate]="created_at_before"
                      (ngModelChange)="changeCreate($event,'after')"
                      [choice_modal]="'date'"
                      [format]="'YYYY-MM-DD'"
                    ></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
            </at-form-item>
          </div>
          <div at-col [span]="11" [offset]="1">
            <at-form-item>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col [span]="24" class="search-label">
                    <tt-i18n [t]="'Model.Common.updated_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="updated_at_before" [format]="'YYYY-MM-DD'"
                      (ngModelChange)="changeUpdate($event,'after')"
                      [choice_modal]="'date'"></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
              <div at-col [span]="2" class="middle-line">
                <at-divider [height]="3"></at-divider>
              </div>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col class="search-label" [span]="24">
                    <tt-i18n [t]="'Model.Common.updated_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="updated_at_after" [disableDate]="updated_at_before"
                      (ngModelChange)="changeUpdate($event,'after')"
                      [choice_modal]="'date'"
                      [format]="'YYYY-MM-DD'"
                    ></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
            </at-form-item>
          </div>
        </div>
      </div>

      <div at-col [span]="24">
        <div style="margin-bottom: 24px">
          <button at-button (click)="search()" [atType]="'primary'">
            <span><tt-i18n [t]="'Button.search'"></tt-i18n></span>
          </button>
          <at-divider [vertical]="true" [height]="20"></at-divider>
          <button at-button (click)="reset()" [atType]="'primary'" hollow>
            <span>
        <tt-i18n [t]="'Button.reset'"></tt-i18n>
      </span>
          </button>
          <at-divider [vertical]="true" [height]="20"></at-divider>
          <button at-button (click)="edit()" [atType]="'primary'">
            <span>批量编辑</span>
          </button>
          <ng-template [ngTemplateOutlet]="buttons"></ng-template>
        </div>
      </div>
    </div>
    <!--<div at-row class="filter-container">-->
    <!--<at-dropdown [trigger]="'click'" [autoClose]="false">-->
    <!--<button at-dropdown at-button><span>筛选列表</span></button>-->
    <!--<ul at-drop-menu-list>-->
    <!--<li at-drop-menu-item *ngFor="let item of search_columns">-->
    <!--{{ ("Model." + item.name) | I18n | async}}-->
    <!--</li>-->
    <!--</ul>-->
    <!--</at-dropdown>-->
    <!--</div>-->

    <at-drawer [atClosable]="true" [atVisible]="visible" (atOnClose)="close()" atPlacement="right" [atTitle]="drawer_title" [atWidth]="320">
      <ng-template [ngTemplateOutlet]="edit_template"></ng-template>
    </at-drawer>
    <ng-template #drawer_title>
      <button at-button (click)="batchUpdate()" [atType]="'primary'"> 批量更新</button>
      <!--<at-divider [vertical]="true" [height]="20"></at-divider>-->
      <!--<button at-button (click)="batchDelete()" [atType]="'error'" hollow> 批量删除</button>-->
    </ng-template>

    <ng-template #search_template let-item let-bind="bind">
      <div *ngFor="let item of search_columns;let i =index" at-col [span]="item.type ==='range'? 11 : 5"
           [offset]=" ((i) % 4) == 0 ? 0 : 1">
        <at-form-item>
          <div at-col [span]="24" class="search-label">
            {{ ("Model." + item.name) | I18n | async}}
          </div>
          <at-form-control [span]="24">
            <ng-container [ngSwitch]="item.type">
              <input class="search-input" *ngSwitchCase="'input'" at-input
                     [(ngModel)]="search_params['search[like_'+item.key +']']">
              <atInput class="search-input" *ngSwitchCase="'number'"
                       [atType]="'number'"
                       [(ngModel)]="search_params['search['+item.key +']']">
              </atInput>
              <at-select [multiple]="item.multiple" [(ngModel)]="search_params['search['+item.key +']'+ (item.multiple ? '[]' : '')]"
                         *ngSwitchCase="'select'"
                         style="width: 290px">
                <at-option *ngIf="!item.multiple" [atLabel]="'DataSource.all' | I18n | async" [atValue]="''"></at-option>
                <at-option *ngFor="let option of  item.async ? (item.data_source | async) : item.data_source"
                           [atLabel]="option.name"
                           [atValue]="option.value">
                </at-option>
              </at-select>
              <ng-container *ngSwitchCase="'range'">
                <div at-row>
                  <div at-col [span]="11">
                    <atDatetimePicker [ngModel]="range_keys[item.key]?.before"
                                      [inputIcon]="'calendar'"
                                      (ngModelChange)="setRange($event,item.key,'before')"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"></atDatetimePicker>
                  </div>
                  <div at-col [span]="1" style="  left: 1%;position: relative">
                    <at-divider [height]="3"></at-divider>
                  </div>
                  <div at-col [span]="11" [offset]="1">
                    <atDatetimePicker [ngModel]="range_keys[item.key]?.after"
                                      [inputIcon]="'calendar'"
                                      (ngModelChange)="setRange($event,item.key,'after')"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"
                                      [disableDate]="range_keys[item.key]?.before"></atDatetimePicker>
                  </div>
                </div>
              </ng-container>
            </ng-container>
          </at-form-control>
        </at-form-item>

      </div>
    </ng-template>

    <ng-template #edit_template let-item let-bind="bind">
      <div *ngFor="let item of edit_columns;let i =index" at-col [span]="24">
        <at-form-item>
          <div at-col [span]="24" class="search-label">
            {{ ("Model." + item.name) | I18n | async}}
          </div>
          <at-form-control [span]="24">
            <ng-container [ngSwitch]="item.type">
              <input class="search-input" *ngSwitchCase="'input'" at-input
                     [(ngModel)]="edit_params[item.key]">
              <atInput class="search-input" *ngSwitchCase="'number'"
                       [atType]="'number'"
                       [(ngModel)]="edit_params[item.key]">
              </atInput>
              <at-select [multiple]="item.multiple" [(ngModel)]="edit_params[item.key]" *ngSwitchCase="'select'"
                         style="width: 290px">
                <at-option *ngIf="!item.multiple" [atLabel]="'DataSource.all' | I18n | async" [atValue]="''"></at-option>
                <at-option *ngFor="let option of  item.async ? (item.data_source | async) : item.data_source"
                           [atLabel]="option.name"
                           [atValue]="option.value">
                </at-option>
              </at-select>
              <ng-container *ngSwitchCase="'date'">
                <div at-row>
                  <div at-col [span]="24">
                    <atDatetimePicker [(ngModel)]="edit_params[item.key]"
                                      [inputIcon]="'calendar'"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"></atDatetimePicker>
                  </div>
                </div>
              </ng-container>
            </ng-container>
          </at-form-control>
        </at-form-item>

      </div>
    </ng-template>
  `,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SearchGroupComponent)),
                        multi: true
                    }],
                styles: [".middle-line{padding-top:12px}"]
            }] }
];
/** @nocollapse */
SearchGroupComponent.ctorParameters = () => [];
SearchGroupComponent.propDecorators = {
    search_columns: [{ type: Input }],
    extra_form: [{ type: Input }],
    onSearch: [{ type: Output }],
    buttons: [{ type: Input }],
    extra_search: [{ type: Input }],
    update: [{ type: Output }],
    delete: [{ type: Output }],
    edit_columns: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptyDataComponent {
    constructor() {
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EmptyDataComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-empty-data',
                template: `
    <div *ngIf="(data || [] ).length === 0 || data === undefined || data === null" class="empty-data-box">
      <div class="mb-empty-data">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNjQgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzIuMDAwMDAwLCAtMTMzNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgMTExNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDc4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjguMDAwMDAwLCAxNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlICBmaWxsPSIjRjVGNUY1IiBjeD0iMzIiIGN5PSIzMyIgcng9IjMyIiByeT0iNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LDEyLjc2MDU2MDQgTDM1Ljg1NDMwNDcsMS4yNTczOTYzMyBDMzUuMzY3NDQxNCwwLjQ3MzgyNjYwNSAzNC42NTU4Nzg5LDAgMzMuOTA2NzYxNywwIEwxMi4wOTMyMzgzLDAgQzExLjM0NDEyMTEsMCAxMC42MzI1NTg2LDAuNDczOTUwMjU1IDEwLjE0NTY5NTMsMS4yNTczOTYzMyBMMi42MTQ3OTcyN2UtMTIsMTIuNzYwNTYwNCBMMCwyMiBMNDYsMjIgTDQ2LDEyLjc2MDU2MDQgWiIgID48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjYxMzI4MTMsMTUuOTMxNSBDMzIuNjEzMjgxMywxNC4zMjU4NTExIDMzLjYwNjk1MzEsMTMuMDAwMjM0IDM0LjgzOTY5OTIsMTMgTDQ2LDEzIEw0NiwzMS4xMzcxMjc3IEM0NiwzMy4yNTg5NTc0IDQ0LjY3OTM4NjcsMzUgNDMuMDUwNDI5NywzNSBMMi45NDk1NzAzMSwzNSBDMS4zMjA1MjM0NCwzNSAwLDMzLjI1ODg0MDQgMCwzMS4xMzcxMjc3IEwwLDEzIEwxMS4xNjAzMDA4LDEzIEMxMi4zOTMwNDY5LDEzIDEzLjM4NjcxODgsMTQuMzIyODA4NSAxMy4zODY3MTg4LDE1LjkyODQ1NzQgTDEzLjM4NjcxODgsMTUuOTQ5NjM4MyBDMTMuMzg2NzE4OCwxNy41NTUyODcyIDE0LjM5MTcxMDksMTguODUxMTgwOSAxNS42MjQ0NTcsMTguODUxMTgwOSBMMzAuMzc1NTQzLDE4Ljg1MTE4MDkgQzMxLjYwODI4OTEsMTguODUxMTgwOSAzMi42MTMyODEzLDE3LjU0MzM1MTEgMzIuNjEzMjgxMywxNS45Mzc3MDIxIEwzMi42MTMyODEzLDE1LjkzMTUgWiIgIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt="empty" class="ng-star-inserted">
      </div>
      <div>
        <p class="empty-description">
          <tt-i18n [t]="'Message.no_data'"></tt-i18n>
        </p>
      </div>
    </div>`,
                styles: [":host .mb-empty-data{width:100%;font-size:14px;line-height:22px;text-align:center}:host .empty-description{text-align:center;color:rgba(0,0,0,.45)}:host .empty-data-box{margin:32px 0}"]
            }] }
];
/** @nocollapse */
EmptyDataComponent.ctorParameters = () => [];
EmptyDataComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TtComponentModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NestedJsonKeyPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        // @ts-ignore
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TtDataTableModule {
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

export { CommonDataTableComponent, DataBaseComponent, HttpHelper, I18nService, TtComponentModule, TtDataTableModule, TtHttpModule, TtI18nComponent, TtI18nModule, TtInterceptorProviders, zhCN, TokenInterceptor as ɵa, API_CONFIG_TOKEN as ɵb, ResponseInterceptor as ɵd, SIGN_OUT_URL_TOKEN as ɵe, TtI18nPipe as ɵf, I18nService as ɵg, I18N_TOKEN as ɵh, TtI18nComponent as ɵj, SearchGroupComponent as ɵk, EmptyDataComponent as ɵl, CommonDataTableComponent as ɵm, DataBaseComponent as ɵn, NestedJsonKeyPipe as ɵo };
//# sourceMappingURL=ng-tt.js.map
