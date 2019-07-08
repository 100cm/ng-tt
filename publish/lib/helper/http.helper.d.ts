/**
 * Created by icepoint1999 on 7/31/16.
 */
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateParams, SearchParams } from '../interfaces/any-object.interface';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { JsonResponse } from '../interfaces/json-response.interface';
export declare class AccessToken {
    _access_token: string;
    _token_type: string;
    _expires_in: number;
    _created_at: number;
    readonly access_token: string;
    readonly token_type: string;
    readonly expires_in: number;
    readonly created_at: number;
}
export declare class MyHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k: string): string;
    encodeValue(v: string): string;
    serializeValue(v: any): any;
}
export declare class HttpHelper {
    http_client: HttpClient;
    private platformId;
    private api_config;
    apiConfig: ApiConfigInterface;
    constructor(http_client: HttpClient, platformId: Object, api_config: ApiConfigInterface);
    private _access_token;
    access_token: string;
    /**
     * TODO 有待优化 rxjs
     * 封装自定义get
     */
    AUTH_HTTP_GET<T>(url: string, params?: SearchParams, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    AUTH_HTTP_DELETE<T>(url: string, params?: SearchParams, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    AUTH_HTTP_POST<T>(url: string, params?: CreateParams, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    AUTH_HTTP_PUT<T>(url: string, body: Object, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    AUTH_HTTP_UPLOAD_PUT<T>(url: string, body: Object, prefix?: string, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    AUTH_HTTP_UPLOAD_POST<T>(url: string, body: Object, prefix?: string, headers?: HttpHeaders): Observable<JsonResponse<T>>;
    objectToFormData(obj: object, form: FormData, namespace?: string): FormData;
}
