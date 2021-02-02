import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '@shared/modules/shared.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
