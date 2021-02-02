import { environment } from '../../../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import _ from 'lodash';

export abstract class HttpService {
    protected URL = `${environment.api}`;

    constructor(protected http: HttpClient) {
    }

    /**
     * 
     * @param res 
     */
    protected handleError(res: any) {
        return throwError(res.error.error || res.error);
    }

    /**
     * 
     * @param res 
     */

    protected extractData(res: any) {
        // let body = res.json();
        return res || {};
    }

    /**
     * 
     * @param path 
     * @param data 
     */
    post(path: any, data: any) {
        const url = this.getUrl(path);
        return this.http.post(url, data).pipe(map(res => {
            return this.extractData(res);
        }),
            catchError(err => {
                return this.handleError(err);
            }));
    }

    /**
     * extend get http
     * @param url
     * @param data
     * @return {void}
     */

    get(path, data: any = {}): Observable<any> {
        const url = this.getUrl(path);
        return this.http.get(url, {
            params: { ...data }
        }).pipe(map(res => {
            return this.extractData(res);
        }),
            catchError((err: any) => {
                return this.handleError(err);
            }));
    }
    /**
     * 
     * @param path 
     */
    getUrl(path: string) {
        const url = `${this.URL}/${path}`;
        return url;
    }
}
