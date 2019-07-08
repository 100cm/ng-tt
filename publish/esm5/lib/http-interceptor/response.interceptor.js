/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SIGN_OUT_URL_TOKEN } from '../inject-tokens/sign-out-token';
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
        if (body.status && body.status.code === '40200') {
        }
        body.status && body.status.code !== '20000' ?
            clone_body = body
            :
                // @ts-ignore
                clone_body = tslib_1.__assign({ status: body.status }, body.data) || body;
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
export { ResponseInterceptor };
if (false) {
    /** @type {?} */
    ResponseInterceptor.prototype.skip_urls;
    /**
     * @type {?}
     * @private
     */
    ResponseInterceptor.prototype.sign_out_url;
    /**
     * @type {?}
     * @private
     */
    ResponseInterceptor.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9yL3Jlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF3RCxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlyRTtJQUtFLDZCQUNzQyxZQUFvQixFQUNoRCxNQUFjO1FBRGMsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp4QixjQUFTLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBTXRDLENBQUM7Ozs7OztJQUVELHVDQUFTOzs7OztJQUFULFVBQVUsR0FBMkIsRUFBRSxJQUFpQjtRQUF4RCxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBd0QsSUFBSyxPQUFBLENBQUMsS0FBSyxZQUFZLFlBQVksQ0FBQyxFQUEvQixDQUErQixFQUFDLEVBQ2hJLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQTJEO1lBQzlELElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUFFO2dCQUM3RCxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUN4RDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUEyRDs7WUFDbEUsSUFBSSxHQUEyQyxLQUFLLENBQUMsSUFBSTs7WUFDM0QsVUFBVSxHQUEyQyxJQUFJO1FBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDL0MsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDMUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7U0FFaEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBRTNDLFVBQVUsR0FBRyxJQUFJO1lBQ2pCLENBQUM7Z0JBQ0QsYUFBYTtnQkFDYixVQUFVLEdBQUcsbUJBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7UUFFM0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBMUNGLFVBQVU7Ozs7NkNBTU4sTUFBTSxTQUFDLGtCQUFrQjtnQkFickIsTUFBTTs7SUFtRGYsMEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTNDWSxtQkFBbUI7OztJQUU5Qix3Q0FBc0M7Ozs7O0lBR3BDLDJDQUF3RDs7Ozs7SUFDeEQscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTSUdOX09VVF9VUkxfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL3NpZ24tb3V0LXRva2VuJztcbmltcG9ydCB7IEFueU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXR5dW5SZXNwb25zZSwgSnNvblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9qc29uLXJlc3BvbnNlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBza2lwX3VybHMgPSBbJy9hcGkvb2F1dGgvdG9rZW4uanNvbiddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU0lHTl9PVVRfVVJMX1RPS0VOKSBwcml2YXRlIHNpZ25fb3V0X3VybDogc3RyaW5nLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8QW55T2JqZWN0PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKGZpbHRlcigoZXZlbnQ6IEh0dHBFdmVudDxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4pID0+IChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkpLFxuICAgICAgbWFwKChldmVudDogSHR0cFJlc3BvbnNlPEpzb25SZXNwb25zZTxBdHl1blJlc3BvbnNlPEFueU9iamVjdD4+PikgPT4ge1xuICAgICAgICBpZiAodGhpcy5za2lwX3VybHMuZmluZCh1cmwgPT4gZXZlbnQudXJsLmluZGV4T2YodXJsKSAhPT0gLTEpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBldmVudC5jbG9uZSh7Ym9keTogdGhpcy5oYW5kbGVSZXNwb25zZShldmVudCl9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UoZXZlbnQ6IEh0dHBSZXNwb25zZTxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4pOiBKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+PiB7XG4gICAgY29uc3QgYm9keTogSnNvblJlc3BvbnNlPEF0eXVuUmVzcG9uc2U8QW55T2JqZWN0Pj4gPSBldmVudC5ib2R5O1xuICAgIGxldCBjbG9uZV9ib2R5OiBKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+PiA9IGJvZHk7XG4gICAgaWYgKGJvZHkuc3RhdHVzICYmIGJvZHkuc3RhdHVzLmNvZGUgPT09ICc0MDEwMCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2lnbl9vdXRfdXJsXSk7XG4gICAgICBjbG9uZV9ib2R5ID0ge307XG4gICAgfVxuICAgIGlmIChib2R5LnN0YXR1cyAmJiBib2R5LnN0YXR1cy5jb2RlID09PSAnNDAyMDAnKSB7XG5cbiAgICB9XG4gICAgYm9keS5zdGF0dXMgJiYgYm9keS5zdGF0dXMuY29kZSAhPT0gJzIwMDAwJyA/XG5cbiAgICAgIGNsb25lX2JvZHkgPSBib2R5XG4gICAgICA6XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjbG9uZV9ib2R5ID0ge3N0YXR1czogYm9keS5zdGF0dXMsIC4uLmJvZHkuZGF0YX0gfHwgYm9keTtcblxuICAgIHJldHVybiBjbG9uZV9ib2R5O1xuICB9XG5cbn1cbiJdfQ==