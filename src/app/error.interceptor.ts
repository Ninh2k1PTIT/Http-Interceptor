import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  public codeError = 100;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([0, 401, 403, 404, 500, 503].indexOf(err.status) !== -1) {
          alert('Bạn đã gặp lỗi ' + err.status);
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
