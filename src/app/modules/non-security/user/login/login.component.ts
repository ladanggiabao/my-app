import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '@environment/environment';
import { User, UserSocial } from '@models';
import { AuthService } from '@services/api';
import { Router } from "@angular/router"
import * as Contants from '@constants';
@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm;
  public isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get f() { return this.loginForm.controls; }

  ngOnInit(): void {

  }

  login() {
    this.isSubmitted = true;
    const user: User = new User({
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    })
    this.authService.fnLogin(user).then((res) => {
      this.router.navigate([''])
    }).catch((err) => {
    })
  }
  loginFacebook() {
    window['FB'].login((response) => {
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'id,email,name,first_name,last_name'
        }, (userInfo) => {
          const user: User = new User().deserialize(userInfo);
          user.avatar = {
            small: `${environment.facebookApiUrl}/${userInfo.id}/picture?width=200&height=200`,
            normal: `${environment.facebookApiUrl}/${userInfo.id}/picture?width=400&height=400`,
            large: `${environment.facebookApiUrl}/${userInfo.id}/picture?width=800&height=800`
          }
          user.userSocial = new UserSocial().deserialize({
            "provider": Contants.USER_CONFIG.PROVIDER.FACEBOOK,
            "extra_data": {
              access_token: response.authResponse.accessToken,
              expires_in: response.authResponse.expiresIn,
              id: response.authResponse.userId,
              email: userInfo.email,
              name: userInfo.name,
              first_name: userInfo.firstName,
              last_name: userInfo.lastName
            }
          });
          this.authService.fnLoginFacebook(user).then((res) => {
            this.router.navigate([''])
          }).catch((err) => {
          })
        });

      } else {
        console.log('User login failed');
      }
    }, { scope: 'email' });
  }


}
