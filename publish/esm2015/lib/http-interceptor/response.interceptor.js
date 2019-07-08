/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SIGN_OUT_URL_TOKEN } from '../inject-tokens/sign-out-token';
export class ResponseInterceptor {
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
        if (body.status && body.status.code === '40200') {
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9yL3Jlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXdELFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBS3JFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQ3NDLFlBQW9CLEVBQ2hELE1BQWM7UUFEYyxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSnhCLGNBQVMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFNdEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQTJCLEVBQUUsSUFBaUI7UUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUF3RCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxZQUFZLENBQUMsRUFBQyxFQUNoSSxHQUFHOzs7O1FBQUMsQ0FBQyxLQUEyRCxFQUFFLEVBQUU7WUFDbEUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUU7Z0JBQzdELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQTJEOztjQUNsRSxJQUFJLEdBQTJDLEtBQUssQ0FBQyxJQUFJOztZQUMzRCxVQUFVLEdBQTJDLElBQUk7UUFDN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMvQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtTQUVoRDtRQUNELElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7WUFFM0MsVUFBVSxHQUFHLElBQUk7WUFDakIsQ0FBQztnQkFDRCxhQUFhO2dCQUNiLFVBQVUsR0FBRyxnQkFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUUzRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7WUExQ0YsVUFBVTs7Ozt5Q0FNTixNQUFNLFNBQUMsa0JBQWtCO1lBYnJCLE1BQU07Ozs7SUFVYix3Q0FBc0M7Ozs7O0lBR3BDLDJDQUF3RDs7Ozs7SUFDeEQscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTSUdOX09VVF9VUkxfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL3NpZ24tb3V0LXRva2VuJztcbmltcG9ydCB7IEFueU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXR5dW5SZXNwb25zZSwgSnNvblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9qc29uLXJlc3BvbnNlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBza2lwX3VybHMgPSBbJy9hcGkvb2F1dGgvdG9rZW4uanNvbiddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU0lHTl9PVVRfVVJMX1RPS0VOKSBwcml2YXRlIHNpZ25fb3V0X3VybDogc3RyaW5nLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8QW55T2JqZWN0PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKGZpbHRlcigoZXZlbnQ6IEh0dHBFdmVudDxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4pID0+IChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkpLFxuICAgICAgbWFwKChldmVudDogSHR0cFJlc3BvbnNlPEpzb25SZXNwb25zZTxBdHl1blJlc3BvbnNlPEFueU9iamVjdD4+PikgPT4ge1xuICAgICAgICBpZiAodGhpcy5za2lwX3VybHMuZmluZCh1cmwgPT4gZXZlbnQudXJsLmluZGV4T2YodXJsKSAhPT0gLTEpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBldmVudC5jbG9uZSh7Ym9keTogdGhpcy5oYW5kbGVSZXNwb25zZShldmVudCl9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UoZXZlbnQ6IEh0dHBSZXNwb25zZTxKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+Pj4pOiBKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+PiB7XG4gICAgY29uc3QgYm9keTogSnNvblJlc3BvbnNlPEF0eXVuUmVzcG9uc2U8QW55T2JqZWN0Pj4gPSBldmVudC5ib2R5O1xuICAgIGxldCBjbG9uZV9ib2R5OiBKc29uUmVzcG9uc2U8QXR5dW5SZXNwb25zZTxBbnlPYmplY3Q+PiA9IGJvZHk7XG4gICAgaWYgKGJvZHkuc3RhdHVzICYmIGJvZHkuc3RhdHVzLmNvZGUgPT09ICc0MDEwMCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2lnbl9vdXRfdXJsXSk7XG4gICAgICBjbG9uZV9ib2R5ID0ge307XG4gICAgfVxuICAgIGlmIChib2R5LnN0YXR1cyAmJiBib2R5LnN0YXR1cy5jb2RlID09PSAnNDAyMDAnKSB7XG5cbiAgICB9XG4gICAgYm9keS5zdGF0dXMgJiYgYm9keS5zdGF0dXMuY29kZSAhPT0gJzIwMDAwJyA/XG5cbiAgICAgIGNsb25lX2JvZHkgPSBib2R5XG4gICAgICA6XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjbG9uZV9ib2R5ID0ge3N0YXR1czogYm9keS5zdGF0dXMsIC4uLmJvZHkuZGF0YX0gfHwgYm9keTtcblxuICAgIHJldHVybiBjbG9uZV9ib2R5O1xuICB9XG5cbn1cbiJdfQ==