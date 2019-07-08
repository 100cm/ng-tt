import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnyObject } from '../interfaces/any-object.interface';
import { AtyunResponse, JsonResponse } from '../interfaces/json-response.interface';
export declare class ResponseInterceptor implements HttpInterceptor {
    private sign_out_url;
    private router;
    skip_urls: string[];
    constructor(sign_out_url: string, router: Router);
    intercept(req: HttpRequest<AnyObject>, next: HttpHandler): Observable<HttpEvent<JsonResponse<AtyunResponse<AnyObject>>>>;
    handleResponse(event: HttpResponse<JsonResponse<AtyunResponse<AnyObject>>>): JsonResponse<AtyunResponse<AnyObject>>;
}
