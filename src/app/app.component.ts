import { Component } from '@angular/core';
import { environment } from '@environment/environment';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '@services/api/global.service';
import { TitleService } from '@services/local/title.service';


@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _titleService: TitleService,
    private _globalService: GlobalService
  ) {
    this._translateService.use('vi');
    this._titleService.setTitle();
    this._globalService.fnGetPublicKey();
  }
  ngOnInit() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-custom").style.top = "0";
        // let collapseButton = Array.from(document.getElementsByClassName('collapse-button') as HTMLCollectionOf<HTMLElement>);
        // let navItems = Array.from(document.getElementsByClassName("nav-item") as HTMLCollectionOf<HTMLElement>);
        // if(currentScrollPos > 0 ) { 
        //   document.getElementById("navbar-custom").style.backgroundColor = "white";
        //   for( let i = 0 ; i < collapseButton.length; i++) {
        //     collapseButton[i].style.setProperty("color", "black", "important")
        //   }
        //   for( let i = 0 ; i < navItems.length; i++) {
        //     navItems[i].style.setProperty("color", "black", "important")
        //   }
        //   // document.getElementsByClassName(".collapse-button,.nav-item").style.color = "black";
        // }
        // else {
        //   document.getElementById("navbar-custom").style.backgroundColor = "transparent";
        //   for( let i = 0 ; i < collapseButton.length; i++) {
        //     collapseButton[i].style.setProperty("color", "white", "important")
        //   }
        //   for( let i = 0 ; i < navItems.length; i++) {
        //     navItems[i].style.setProperty("color", "white", "important")
        //   }
        // }
      } else {
        document.getElementById("navbar-custom").style.top = "-106px";
      }
      prevScrollpos = currentScrollPos;
    }
    this.fbLibrary();
  }
  fbLibrary() {

    (window as any).fbAsyncInit = function () {
      window['FB'].init({
        appId: environment.facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }
}
