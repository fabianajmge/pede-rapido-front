import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private activateRoute: ActivatedRoute) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      req = req.clone({
        body: req.body,
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

    console.log('req: ', req);

    return next.handle(req);
  }
}