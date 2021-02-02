import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private title: any = "Goonder";
    private _translateService: TranslateService;
    constructor(
        private _title: Title,
    ) {}

    setTitle(keyword?: any) {
        if (!keyword) {
            this._title.setTitle(this.title);
        } else {
            this._title.setTitle(`${this.title} -  ${keyword}`);
        }
        return true;
    }
}
