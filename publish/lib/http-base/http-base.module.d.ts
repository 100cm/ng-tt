import { ModuleWithProviders } from '@angular/core';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { TokenInterceptor } from '../http-interceptor/token.interceptor';
import { ResponseInterceptor } from '../http-interceptor/response.interceptor';
export declare const TtInterceptorProviders: ({
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof TokenInterceptor;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof ResponseInterceptor;
    multi: boolean;
})[];
export declare class TtHttpModule {
    static config(api_config: ApiConfigInterface, sign_out_url?: string): ModuleWithProviders;
}
