import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { TokenResponse } from '../interfaces/json-response.interface';
export declare class TokenInterceptor implements HttpInterceptor {
    http: HttpClient;
    private apiConfig;
    private platformId;
    skip_url: any[];
    constructor(http: HttpClient, apiConfig: ApiConfigInterface, platformId: Object);
    private _access_token;
    access_token: string;
    getToken(): Observable<TokenResponse<string>>;
    isRequestAliOss(url: string): boolean;
    intercept(req: HttpRequest<{
        [x: string]: string;
    }>, next: HttpHandler): Observable<HttpEvent<{
        [x: string]: string | number;
    }>>;
    handleTokenReq(next: HttpHandler, req: HttpRequest<{
        [x: string]: string | number;
    }>): Observable<HttpEvent<{
        [x: string]: string;
    }>>;
}
