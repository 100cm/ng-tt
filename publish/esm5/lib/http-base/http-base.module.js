/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
import { SIGN_OUT_URL_TOKEN } from '../inject-tokens/sign-out-token';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../http-interceptor/token.interceptor';
import { ResponseInterceptor } from '../http-interceptor/response.interceptor';
/** @type {?} */
export var TtInterceptorProviders = [
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
export { TtHttpModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1iYXNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2h0dHAtYmFzZS9odHRwLWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRS9FLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUNyRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztDQUN6RTtBQUVEO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7O0lBVFEsbUJBQU07Ozs7O0lBQWIsVUFBYyxVQUE4QixFQUFFLFlBQXFCO1FBQ2pFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLEVBQUU7b0JBQzdELE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFFBQVEsRUFBRSxZQUFZO2lCQUN2QixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBV0QsbUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQSV9DT05GSUdfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL2FwaS1jb25maWctdG9rZW4nO1xuaW1wb3J0IHsgU0lHTl9PVVRfVVJMX1RPS0VOIH0gZnJvbSAnLi4vaW5qZWN0LXRva2Vucy9zaWduLW91dC10b2tlbic7XG5pbXBvcnQgeyBBcGlDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4uL2h0dHAtaW50ZXJjZXB0b3IvdG9rZW4uaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2h0dHAtaW50ZXJjZXB0b3IvcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgY29uc3QgVHRJbnRlcmNlcHRvclByb3ZpZGVycyA9IFtcbiAge3Byb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogVG9rZW5JbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9LFxuICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUdEh0dHBNb2R1bGUge1xuICBzdGF0aWMgY29uZmlnKGFwaV9jb25maWc6IEFwaUNvbmZpZ0ludGVyZmFjZSwgc2lnbl9vdXRfdXJsPzogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUdEh0dHBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQVBJX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGFwaV9jb25maWd9LCB7XG4gICAgICAgIHByb3ZpZGU6IFNJR05fT1VUX1VSTF9UT0tFTixcbiAgICAgICAgdXNlVmFsdWU6IHNpZ25fb3V0X3VybFxuICAgICAgfV1cbiAgICB9O1xuICB9XG59XG4iXX0=