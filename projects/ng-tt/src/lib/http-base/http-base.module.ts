import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
import { SIGN_OUT_URL_TOKEN } from '../inject-tokens/sign-out-token';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../http-interceptor/token.interceptor';
import { ResponseInterceptor } from '../http-interceptor/response.interceptor';

export const TtInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TtHttpModule {
  static config(api_config: ApiConfigInterface, sign_out_url?: string): ModuleWithProviders {
    return {
      ngModule: TtHttpModule,
      providers: [{provide: API_CONFIG_TOKEN, useValue: api_config}, {
        provide: SIGN_OUT_URL_TOKEN,
        useValue: sign_out_url
      }]
    };
  }
}
