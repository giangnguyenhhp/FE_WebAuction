import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorHandlerService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = this.handleError(error);
          return throwError(() => new Error(errorMessage));
        })
      )
  }

  private handleError = (error: HttpErrorResponse): any => {
    if (error.status === 404) {
      return this.handleNotFound(error);
    } else if (error.status === 400) {
      return this.handleBadRequest(error);
    } else if (error.status === 401) {
      return this.handleUnauthorized(error);
    } else if(error.status === 403){
      return this.handleForbidden(error);
    }else if(error.status === 500){
      return this.handleServerError(error);
    }
  }

  private handleNotFound = (error: HttpErrorResponse): string => {
    if(this.router.url === '/authentication/login') {
      return error.error.message;
    }
    this.router.navigate(['/404']).then(() => {
    });
    return error.message;
  }

  private handleBadRequest = (error: HttpErrorResponse): string => {
    if (this.router.url === '/authentication/register' ||
    this.router.url === '/authentication/resetPassword') {
      let message = '';
      const values = Object.values(error.error.errors);

      values.map((m: string | unknown) => {
        message += m + '<br>';
      })
      return message.slice(0, -4);
    } else {
      return error.error.message;
    }
  }

  private handleUnauthorized(error: HttpErrorResponse) {
    if(this.router.url === '/authentication/login') {
      return error.error.message;
    }
    else {
      return error.message;
    }
  }

  private handleForbidden(error: HttpErrorResponse) {
    this.router.navigate(['/forbidden']);
    return "Forbidden: " + error.message;
  }

  private handleServerError(error: HttpErrorResponse) {
    return error.error.message;
  }
}
