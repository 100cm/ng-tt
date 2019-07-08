/**
 * Created by icepoint1999 on 7/31/16.
 */

import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isDate, isObject, isUndefined } from 'lodash';
import { Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../inject-tokens/api-config-token';
import { CreateParams, SearchParams } from '../interfaces/any-object.interface';
import { ApiConfigInterface } from '../interfaces/api-config.interface';
import { JsonResponse } from '../interfaces/json-response.interface';

export class AccessToken {
  public _access_token: string;
  public _token_type: string;
  public _expires_in: number;
  public _created_at: number;

  get access_token(): string {
    return this._access_token;
  }

  get token_type(): string {
    return this._token_type;
  }

  get expires_in(): number {
    return this._expires_in;
  }

  get created_at(): number {
    return this._created_at;
  }
}

// custom serialize encoder
export class MyHttpUrlEncodingCodec extends HttpUrlEncodingCodec {

  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(this.serializeValue(v));
  }

  // tslint:disable-next-line:no-any
  serializeValue(v: any): any {
    if (isObject(v)) {
      return isDate(v) ? v.toISOString() : JSON.stringify(v);
    }
    if (v === null || isUndefined(v)) {
      return '';
    }
    return v;
  }

}

@Injectable({
  providedIn: 'root'
})
export class HttpHelper {

  apiConfig: ApiConfigInterface;

  constructor(public http_client: HttpClient,
              @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(API_CONFIG_TOKEN) private api_config: ApiConfigInterface) {
    this.apiConfig = api_config;
  }

  // 存储token
  private _access_token: string;

  get access_token(): string {
    return isPlatformBrowser(this.platformId) ? (this._access_token || localStorage.getItem('access_token')) : '';
  }

  set access_token(value: string) {
    this._access_token = value;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('access_token', value);
    }
  }

  /**
   * TODO 有待优化 rxjs
   * 封装自定义get
   */
  public AUTH_HTTP_GET<T>(url: string, params: SearchParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const options = {headers};
    return this.http_client.get<JsonResponse<T>>(url, {
      params: new HttpParams({
        encoder: new MyHttpUrlEncodingCodec(),
        fromObject: params
      })
    });
  }

  public AUTH_HTTP_DELETE<T>(url: string, params: SearchParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    return this.http_client.delete<JsonResponse<T>>(url, {
      params: new HttpParams({
        encoder: new MyHttpUrlEncodingCodec(),
        fromObject: params
      })
    });
  }

  public AUTH_HTTP_POST<T>(url: string, params: CreateParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const options = {headers};
    return this.http_client.post<JsonResponse<T>>(url, params, options);
  }

  public AUTH_HTTP_PUT<T>(url: string, body: Object, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const options = {headers};
    return this.http_client.put<JsonResponse<T>>(url, body, options);
  }

  public AUTH_HTTP_UPLOAD_PUT<T>(url: string, body: Object, prefix: string = 'update', headers: HttpHeaders = new HttpHeaders()): Observable<JsonResponse<T>> {
    const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
    // headers.append('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json');
    headers.set('encrypt', 'multipart/form-data');
    const options = {headers};
    const formData: FormData = this.objectToFormData(body, new FormData());
    return this.http_client.put<JsonResponse<T>>(url, formData, options);
  }

  public AUTH_HTTP_UPLOAD_POST<T>(url: string, body: Object, prefix: string = 'update', headers: HttpHeaders = new HttpHeaders()): Observable<JsonResponse<T>> {
    const token = JSON.parse(isPlatformBrowser(this.platformId) ? localStorage.getItem('access_token') : this.access_token) || null;
    // headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const options = {headers};
    const formData: FormData = this.objectToFormData(body, new FormData());
    return this.http_client.post<JsonResponse<T>>(url, formData, options);
  }

  // 将对象或数组转换成formdata的格式
  objectToFormData(obj: object, form: FormData, namespace: string = ''): FormData {
    const fd = form || new FormData();
    let formKey;
    if (obj instanceof Array) {
      for (const item of obj) {
        if (typeof item === 'object' && !(item instanceof File)) {
          this.objectToFormData(item, fd, `${namespace}[]`);
        } else {
          fd.append(`${namespace}[]`, item);
        }
      }
    } else {
      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {

          formKey = namespace ? `${namespace}[${property}]` : property;
          // if the property is an object, but not a File,
          // use recursivity.
          if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

            this.objectToFormData(obj[property], fd, formKey);
          } else {

            // if it's a string or a File object
            fd.append(formKey, obj[property]);
          }

        }
      }
    }
    return fd;

  }

}
