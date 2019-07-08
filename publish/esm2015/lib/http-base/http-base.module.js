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
export const TtInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];
export class TtHttpModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1iYXNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2h0dHAtYmFzZS9odHRwLWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRS9FLE1BQU0sT0FBTyxzQkFBc0IsR0FBRztJQUNwQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUNyRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztDQUN6RTtBQVFELE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUE4QixFQUFFLFlBQXFCO1FBQ2pFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLEVBQUU7b0JBQzdELE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFFBQVEsRUFBRSxZQUFZO2lCQUN2QixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJX0NPTkZJR19UT0tFTiB9IGZyb20gJy4uL2luamVjdC10b2tlbnMvYXBpLWNvbmZpZy10b2tlbic7XG5pbXBvcnQgeyBTSUdOX09VVF9VUkxfVE9LRU4gfSBmcm9tICcuLi9pbmplY3QtdG9rZW5zL3NpZ24tb3V0LXRva2VuJztcbmltcG9ydCB7IEFwaUNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUb2tlbkludGVyY2VwdG9yIH0gZnJvbSAnLi4vaHR0cC1pbnRlcmNlcHRvci90b2tlbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vaHR0cC1pbnRlcmNlcHRvci9yZXNwb25zZS5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBUdEludGVyY2VwdG9yUHJvdmlkZXJzID0gW1xuICB7cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBUb2tlbkludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX0sXG4gIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFR0SHR0cE1vZHVsZSB7XG4gIHN0YXRpYyBjb25maWcoYXBpX2NvbmZpZzogQXBpQ29uZmlnSW50ZXJmYWNlLCBzaWduX291dF91cmw/OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFR0SHR0cE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBBUElfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogYXBpX2NvbmZpZ30sIHtcbiAgICAgICAgcHJvdmlkZTogU0lHTl9PVVRfVVJMX1RPS0VOLFxuICAgICAgICB1c2VWYWx1ZTogc2lnbl9vdXRfdXJsXG4gICAgICB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==