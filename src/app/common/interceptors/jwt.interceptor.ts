import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import * as _ from 'lodash';
/*
  OLD:
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/operator/do';
 */
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from 'src/app/shared/services/api/auth.service';
import { AccessToken, User } from 'src/app/shared/models';
import { Router } from '@angular/router';
import * as Constants from '@constants';
import { NotifyService } from '@services/api/notify.service';
import { GlobalService } from '@services/api/global.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  sessionInfo: User;
  constructor(
    private authService: AuthService,
    private globalService: GlobalService,
    private notifyService: NotifyService,
    // private publicKey: string,
    private router: Router) {
    this.authService.sessionInfo.subscribe(x => this.sessionInfo = x);
    // this.globalService.publicKey.subscribe(x => this.publicKey = x);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: AccessToken = _.get( this.sessionInfo,'accessToken');
    if (accessToken) {
      const {
        token
      } = accessToken;
      if (token) {
        const authReq = req.clone({
          headers: req.headers.set(
            'Authorization',
            `Bearer ${token}`
          )
        });
        req = authReq;
      }
    }

    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event) {
    if( [200,201, 202, 204].includes(event.status)) {
      const message = _.get(event,'body.message');
      if(message) this.notifyService.error(message);
    }
  }

  handleError(req: HttpRequest<any>, event) {
    if (event.status == 401) {
      console.log('unauthorized');
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}