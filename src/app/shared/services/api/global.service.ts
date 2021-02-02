import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/api/http.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local/local-storage.service';
import * as Constants from '@constants';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class GlobalService extends HttpService {
  private publicKeySubject: BehaviorSubject<string>;
  public publicKey: Observable<string>;
  constructor(http: HttpClient, private _localStorageService: LocalStorageService) {
    super(http);
    this.publicKeySubject = new BehaviorSubject<string>(this._localStorageService.getItem(Constants.PUBLIC_KEY));
    this.publicKey = this.publicKeySubject.asObservable();

  }

 
  /**
   * function register  account
   * @param user 
   */
  async fnGetPublicKey() {
    const response = await this.get('api/public-key').toPromise();
    const key = _.get(response,'data.item.public_key');
    if(key) {
        this._localStorageService.setItem(Constants.PUBLIC_KEY, key);
        this.publicKeySubject.next(key);
    }
  }

  public get key(): string {
    return this.publicKeySubject.value;
  }

}
