import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@services/api';
import { TranslateService } from '@ngx-translate/core';
import { NotifyService } from '@services/api/notify.service';
import * as _ from 'lodash';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private _translateService: TranslateService, public notifyService: NotifyService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload(true);
            }
            if (err.status === 0) {
                this._translateService.get("GLOBAL.UNKNOWN").toPromise().then((value) => {
                    this.notifyService.error(value);
                });
            }
            const message = _.get(err,'error.message');
            if(message) this.notifyService.error(message);
            return throwError(err);
        }));
    }
}
