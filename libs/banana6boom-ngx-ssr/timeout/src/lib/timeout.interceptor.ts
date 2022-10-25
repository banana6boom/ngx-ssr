import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { NEVER, Observable, of, throwError } from 'rxjs';
import { catchError, startWith, switchMap, timeout } from 'rxjs/operators';

export interface TimeoutOptions {
  timeout: number;
}

export const TIMEOUT_OPTIONS = new InjectionToken<TimeoutOptions>(
  'Timeout Options',
  {
    factory() {
      return { timeout: null };
    },
  }
);

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(
    @Inject(TIMEOUT_OPTIONS) private timeoutOptions: TimeoutOptions
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      switchMap((event) => {
        if (event.type === HttpEventType.Sent && this.timeoutOptions.timeout) {
          return NEVER.pipe(
            startWith(event),
            timeout(this.timeoutOptions.timeout)
          );
        }

        return of(event);
      }),
      catchError((error) => {
        if (error && error.name === 'TimeoutError') {
          return throwError(
            new HttpErrorResponse({ error, url: request.urlWithParams })
          );
        }

        return throwError(error);
      })
    );
  }
}
