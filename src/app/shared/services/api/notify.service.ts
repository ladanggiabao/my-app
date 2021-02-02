import { environment } from '@environment/environment';
import { ToastrService  } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class NotifyService {

    constructor(
        private toastr: ToastrService
    ) { }

    success(message: string) {
        return this.toastr.success(message, environment.appName);
    }

    error(message: string) {
        return this.toastr.error(message, environment.appName);
    }

    warning(message: string) {
        return this.toastr.warning(message, environment.appName);
    }

    info(message: string) {
        return this.toastr.info(message, environment.appName);
    }


}