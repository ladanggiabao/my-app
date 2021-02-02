import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateComponent } from '@core-components/translate/translate.component';
import { AppFieldErrorDisplayComponent } from '@core-components/app-field-error-display/app-field-error-display.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports: [CommonModule, ToastrModule.forRoot()],
    declarations: [PageTitleComponent, TranslateComponent, AppFieldErrorDisplayComponent],
    exports: [PageTitleComponent,
        CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, TranslateComponent, AppFieldErrorDisplayComponent
    ]
})
export class SharedModule { }