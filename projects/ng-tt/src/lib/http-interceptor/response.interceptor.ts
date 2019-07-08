import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SIGN_OUT_URL_TOKEN } from '../inject-tokens/sign-out-token';
import { AnyObject } from '../interfaces/any-object.interface';
import { AtyunResponse, JsonResponse } from '../interfaces/json-response.interface';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  skip_urls = ['/api/oauth/token.json'];

  constructor(
    @Inject(SIGN_OUT_URL_TOKEN) private sign_out_url: string,
    private router: Router) {

  }

  intercept(req: HttpRequest<AnyObject>, next: HttpHandler): Observable<HttpEvent<JsonResponse<AtyunResponse<AnyObject>>>> {
    return next.handle(req).pipe(filter((event: HttpEvent<JsonResponse<AtyunResponse<AnyObject>>>) => (event instanceof HttpResponse)),
      map((event: HttpResponse<JsonResponse<AtyunResponse<AnyObject>>>) => {
        if (this.skip_urls.find(url => event.url.indexOf(url) !== -1)) {
          return event;
        } else {
          return event.clone({body: this.handleResponse(event)});
        }
      })
    );
  }

  handleResponse(event: HttpResponse<JsonResponse<AtyunResponse<AnyObject>>>): JsonResponse<AtyunResponse<AnyObject>> {
    const body: JsonResponse<AtyunResponse<AnyObject>> = event.body;
    let clone_body: JsonResponse<AtyunResponse<AnyObject>> = body;
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
      clone_body = {status: body.status, ...body.data} || body;

    return clone_body;
  }

}
