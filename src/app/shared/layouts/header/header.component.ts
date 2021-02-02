import { Component, OnInit } from '@angular/core';
import { AccessToken, User } from '@models';
import { AuthService } from '@services/api';
import * as _ from 'lodash';
@Component({
    selector: '[app-header]',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed = true;
    sessionInfo: User;
    isLogged: boolean = false;
    constructor(
        private authService: AuthService
    ) {
        this.authService.sessionInfo.subscribe(x => this.sessionInfo = x);
        const accessToken: AccessToken = _.get(this.sessionInfo, 'accessToken');
        if (accessToken) this.isLogged = true;
    }

    ngOnInit(): void {
    }

}
