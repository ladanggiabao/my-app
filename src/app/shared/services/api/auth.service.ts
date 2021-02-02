import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/api/http.service';
import { HttpClient } from '@angular/common/http';
import { User, AccessToken } from 'src/app/shared/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local/local-storage.service';
import * as Constants from '@constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {
  private sessionInfoSubject: BehaviorSubject<User>;
  public sessionInfo: Observable<User>;
  constructor(http: HttpClient, private _localStorageService: LocalStorageService) {
    super(http);
    this.sessionInfoSubject = new BehaviorSubject<User>(this._localStorageService.getItem(Constants.USER_INFO));
    this.sessionInfo = this.sessionInfoSubject.asObservable();

  }

  /**
   * service login to authencation
   * userInfo { 
   *    email: <string>
   *    password: <string>
   * }
   * when authencation is success, localstorage will store token to database
   * @param userInfo 
   */
  async fnLogin(userInfo: User) {
    const { email, password } = userInfo;
    try {
      const response = await this.post(`api/users/login`, { email, password }).toPromise();
      const {
        access_token: accessToken
      } = response.data.item;
      this._localStorageService.setItem(Constants.USER_INFO, new User().deserialize(response.data.item));
      this._localStorageService.setItem(Constants.ACCESS_TOKEN, accessToken);
      this.sessionInfoSubject.next(userInfo);
      return userInfo;
    } catch (error) {
      throw error;
    }
  }

  async fnLoginFacebook(user: User) {
    const userInfo = user.serialize();
    try {
      const response = await this.post(`api/users/facebook`, userInfo).toPromise();
      const {
        access_token: accessToken
      } = response.data.item;
      this._localStorageService.setItem(Constants.USER_INFO, new User().deserialize(response.data.item));
      this._localStorageService.setItem(Constants.ACCESS_TOKEN, accessToken);
      this.sessionInfoSubject.next(userInfo);
      return userInfo;
    } catch (error) {
      throw error;
    }

  }

  /**
   * service logout user
   * when logout click, system will remove token , and call api to server to remove it.
   */
  logout() {
    // remove user from local storage to log user out
    this._localStorageService.remove(Constants.USER_INFO);
    this._localStorageService.remove(Constants.ACCESS_TOKEN);
    this.sessionInfoSubject.next(null);

  }

  /**
   * function register  account
   * @param user 
   */
  fnRegister(user: User) {
    return this.post('api/users/register',{...user.serialize(), type: Constants.USER_CONFIG.LOGIN_TYPE.NORMAL });
  }

  /**
   * function update profile
   * @param user 
   */
  fnUpdateProfile(data: Object) {
    return this.post('api/users/profile', data);
  }

  public get userInfo(): User {
    return this.sessionInfoSubject.value;
  }

  public get accessToken(): AccessToken {
    const sessionInfo = this.sessionInfoSubject.value;
    return sessionInfo.accessToken;
  }

}
