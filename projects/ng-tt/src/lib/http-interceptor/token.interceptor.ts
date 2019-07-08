import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from as observableFrom, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { TokenResponse } from '../interfaces/json-response.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  skip_url = [];

  constructor(public http: HttpClient,
              @Inject(API_CONFIG_TOKEN) private apiConfig: ApiConfigInterface,
              @Inject(PLATFORM_ID) private platformId: Object) {

  }

  // 存储token
  private _access_token: string;

  get access_token(): string {
    return this._access_token || localStorage.getItem(this.apiConfig.tokenKey);
  }

  set access_token(value: string) {
    this._access_token = value;
    localStorage.setItem(this.apiConfig.tokenKey, value);
  }

  getToken(): Observable<TokenResponse<string>> {
    const token_url = this.apiConfig.tokenUrl;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = {headers};
    const uid = this.apiConfig.apiUid;
    const secret = this.apiConfig.apiSecret;
    const body = JSON.stringify({client_secret: secret, client_id: uid, grant_type: 'client_credentials'});
    return this.http.post<TokenResponse<string>>(token_url, body, options);
  }

  isRequestAliOss(url: string): boolean {
    let result = false;
    this.skip_url.forEach(skip => {
      if (url.startsWith(skip)) {
        result = true;
      }
    });
    return result;
  }

  intercept(req: HttpRequest<{ [x: string]: string }>, next: HttpHandler): Observable<HttpEvent<{ [x: string]: string | number }>> {
    // console.info('Enter Token interceptor');
    if (req.url.indexOf(this.apiConfig.tokenUrl) !== -1 || this.isRequestAliOss(req.url)) {
      return next.handle(req);
    } else {
      // check if token exist
      const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem(this.apiConfig.tokenKey) : this.access_token) || null;
      // need get token first
      if (token == null || token.var3 + token.var2 < new Date().getTime() / 1000 || this.access_token === '{}' || token === {}) {
        const observer: Observable<HttpEvent<{ [x: string]: string }>> = observableFrom(this.getToken().toPromise()).pipe(switchMap((data: TokenResponse<string>) => {
          this.access_token = JSON.stringify({
            session_key: data[this.apiConfig.tokenKey],
            var2: this.apiConfig.tokenExpiredIn,
            var3: new Date()
          });
          return this.handleTokenReq(next, req);
        }));
        return observer;
      } else {
        return this.handleTokenReq(next, req);
      }

    }

  }

  handleTokenReq(next: HttpHandler, req: HttpRequest<{ [x: string]: string | number }>): Observable<HttpEvent<{ [x: string]: string }>> {
    const token = {};
    this.apiConfig.tokenParams.forEach(param => {
      token[param.name] = param.value();
    });
    // tslint:disable-next-line:no-any
    const update_params: any = {};

    // check if it is get
    if (req.method === 'GET') {
      update_params.setParams = {...token};
    }
    // check if it is form data
    if (req.body instanceof FormData) {
      const body = req.body;
      // body.append('access_token', token.access_token);
      // body.append('user_session_key', token.user_session_key);
      this.apiConfig.tokenParams.forEach(param => {
        body.append(param.name, param.value());
      });
      update_params.body = body;
    } else {
      update_params.body = {...req.body, ...token};
    }

    // its ok send it
    const secureReq = req.clone({
      ...update_params
    });
    return next.handle(secureReq);
  }

}
